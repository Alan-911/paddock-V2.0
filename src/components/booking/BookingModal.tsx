'use client';

import { useEffect, useState, useCallback, type FormEvent } from 'react';
import styles from './BookingModal.module.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('7 PM');
  const [partySize, setPartySize] = useState('1-2');
  const [tablePreference, setTablePreference] = useState('No Preference');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Get today's date in YYYY-MM-DD format for the min attribute
  const today = new Date().toISOString().split('T')[0];

  // Reset form state when modal opens
  useEffect(() => {
    if (isOpen) {
      setName('');
      setPhone('');
      setDate('');
      setTime('7 PM');
      setPartySize('1-2');
      setTablePreference('No Preference');
      setNotes('');
      setErrors({});
      setShowConfirmation(false);
    }
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const validate = useCallback((): boolean => {
    const newErrors: { name?: string; phone?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.trim().length < 6) {
      newErrors.phone = 'Enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [name, phone]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const formattedDate = date
      ? new Date(date + 'T00:00:00').toLocaleDateString('en-GB', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : 'Not specified';

    const message = [
      '🎉 *Table Reservation — Paddock Lounge*',
      '',
      `👤 Name: ${name.trim()}`,
      `📱 Phone: ${phone.trim()}`,
      `📅 Date: ${formattedDate}`,
      `🕐 Time: ${time}`,
      `👥 Guests: ${partySize}`,
      `🪑 Table: ${tablePreference}`,
      `💬 Notes: ${notes.trim() || 'None'}`,
      '',
      'Please confirm my reservation. Thank you!',
    ].join('\n');

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/250788471841?text=${encoded}`, '_blank');

    // Show confirmation
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close booking modal"
          type="button"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Reserve Your Table</span>
          <h2 className={styles.title}>Book a Table</h2>
          <p className={styles.subtitle}>
            Secure your spot at Paddock Lounge, Kigali
          </p>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="booking-name">
              Full Name<span className={styles.required}>*</span>
            </label>
            <input
              id="booking-name"
              type="text"
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              placeholder="Your full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              autoComplete="name"
            />
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>

          {/* Phone */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="booking-phone">
              Phone Number<span className={styles.required}>*</span>
            </label>
            <input
              id="booking-phone"
              type="tel"
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              placeholder="+250 7XX XXX XXX"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              autoComplete="tel"
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
          </div>

          {/* Date & Time — side by side */}
          <div className={styles.row}>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="booking-date">
                Date
              </label>
              <input
                id="booking-date"
                type="date"
                className={styles.input}
                value={date}
                min={today}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="booking-time">
                Time
              </label>
              <select
                id="booking-time"
                className={styles.select}
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="6 PM">6 PM</option>
                <option value="7 PM">7 PM</option>
                <option value="8 PM">8 PM</option>
                <option value="9 PM">9 PM</option>
                <option value="10 PM">10 PM</option>
                <option value="11 PM">11 PM</option>
              </select>
            </div>
          </div>

          {/* Party Size & Table — side by side */}
          <div className={styles.row}>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="booking-size">
                Party Size
              </label>
              <select
                id="booking-size"
                className={styles.select}
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
              >
                <option value="1-2">1–2 guests</option>
                <option value="3-4">3–4 guests</option>
                <option value="5-6">5–6 guests</option>
                <option value="7-10">7–10 guests</option>
                <option value="10+">10+ guests</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="booking-table">
                Table Preference
              </label>
              <select
                id="booking-table"
                className={styles.select}
                value={tablePreference}
                onChange={(e) => setTablePreference(e.target.value)}
              >
                <option value="No Preference">No Preference</option>
                <option value="Main Floor">Main Floor</option>
                <option value="Mezzanine">Mezzanine</option>
                <option value="DJ Booth">DJ Booth</option>
                <option value="VVIP Suite">VVIP Suite</option>
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="booking-notes">
              Special Requests <span style={{ opacity: 0.5, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
            </label>
            <textarea
              id="booking-notes"
              className={styles.textarea}
              placeholder="Birthday celebration, dietary needs, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            <svg
              className={styles.whatsappIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send via WhatsApp
          </button>
        </form>

        {/* Confirmation Overlay */}
        {showConfirmation && (
          <div className={styles.confirmationOverlay}>
            <div className={styles.confirmationIcon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className={styles.confirmationText}>Sent!</span>
            <span className={styles.confirmationSub}>
              Opening WhatsApp...
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
