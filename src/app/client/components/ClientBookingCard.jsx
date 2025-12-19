"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";

import serviceProfile from "../../assets/serviceProfile.png";
import ratingIcon from "../../assets/rating.svg";
import briefcaseIcon from "../../assets/briefcase.svg";
import calendarIcon from "../../assets/calendar.png";
import locationIcon from "../../assets/location.svg";
import successMark from "../../assets/succes-mark.png";
import cancelIcon from "../../assets/cancel.png";

export default function ClientBookingCard({ booking, onCancel }) {
  const {
    id,
    providerName,
    rating,
    service,
    date: initialDate,
    time: initialTime,
    location,
  } = booking;

  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);

  const [form, setForm] = useState({
    date: initialDate,
    time: initialTime,
  });

  /* ================= Helpers ================= */

  const hasChanged = useMemo(() => {
    return form.date !== initialDate || form.time !== initialTime;
  }, [form, initialDate, initialTime]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSave = useCallback(() => {
    setIsRescheduleOpen(false);
    setIsSuccessOpen(true);
    // TODO: send { id, ...form } to backend
  }, []);

  const handleCancelConfirm = useCallback(() => {
    setIsCancelOpen(false);
    onCancel(id);
  }, [id, onCancel]);

  return (
    <>
      {/* ================= Booking Card ================= */}
      <article className="bg-white p-4 rounded border shadow-sm space-y-3">
        {/* Provider */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={serviceProfile}
              alt={`${providerName} profile`}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold">{providerName}</h2>
            <div className="flex items-center gap-1">
              <Image src={ratingIcon} alt="rating" width={16} height={16} />
              <span className="text-sm">{rating}</span>
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="flex items-center gap-2 text-gray-600">
          <Image src={briefcaseIcon} alt="service" width={16} height={16} />
          <p>{service}</p>
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-2">
          <Image src={calendarIcon} alt="calendar" width={16} />
          <p className="flex items-center gap-2">
            {form.date}
            <span className="h-4 border border-gray-300" />
            {form.time}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <Image src={locationIcon} alt="location" width={16} height={16} />
          <p>{location}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => setIsRescheduleOpen(true)}
            className="px-4 py-1 border border-red-600 text-red-600 rounded-full"
          >
            Reschedule
          </button>

          <button className="px-4 py-1 bg-primary-600 text-white rounded-full">
            Message
          </button>

          <button
            onClick={() => setIsCancelOpen(true)}
            className="px-4 py-1 bg-red-600 text-white rounded-full"
          >
            Cancel
          </button>
        </div>
      </article>

      {/* ================= Reschedule Modal ================= */}
      {isRescheduleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-md rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Reschedule Booking</h2>
            <p className="text-gray-600">
              Choose a new date and time for your booking
            </p>

            <div className="relative">
              <Image
                src={calendarIcon}
                alt="calendar"
                width={18}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border pl-10 p-2 rounded"
              />
            </div>

            <div className="relative">
              <CiClock2
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border pl-10 p-2 rounded"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setIsRescheduleOpen(false)}
                className="px-4 py-2 border border-primary-600 rounded-xl"
              >
                Back
              </button>

              <button
                onClick={handleSave}
                disabled={!hasChanged}
                className={`px-4 py-2 rounded-xl text-white ${
                  hasChanged
                    ? "bg-primary-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= Success Modal ================= */}
      {isSuccessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-2xl rounded-lg p-6 text-center space-y-4">
            <Image
              src={successMark}
              alt="Success"
              width={80}
              className="mx-auto"
            />

            <h1 className="text-2xl font-semibold">Booking Rescheduled</h1>

            <p className="text-gray-600">
              You have successfully rescheduled this booking.
            </p>

            <button
              onClick={() => setIsSuccessOpen(false)}
              className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-xl"
            >
              Go back to dashboard
            </button>
          </div>
        </div>
      )}

      {/* ================= Cancel Confirmation Modal ================= */}
      {isCancelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-md rounded-lg p-6 text-center space-y-4">
            <Image
              src={cancelIcon}
              alt="Cancel booking"
              width={80}
              className="mx-auto"
            />

            <h1 className="text-2xl font-semibold">Cancel booking?</h1>

            <p className="text-gray-600">
              Are you sure you want to cancel this booking? This action cannot
              be undone.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={handleCancelConfirm}
                className="px-6 py-2 bg-red-600 text-white rounded-xl"
              >
                Yes, Cancel
              </button>

              <button
                onClick={() => setIsCancelOpen(false)}
                className="px-6 py-2 border border-gray-400 rounded-xl"
              >
                No, go back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
