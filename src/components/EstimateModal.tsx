import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { toast } from "sonner";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    name: string;
    email: string;
    phone: string;
    city: string;
    type: string;
    message: string;
  }) => Promise<void> | void;
}

const fieldBase =
  "mt-1 h-11 rounded-xl bg-[#F7F4ED] border border-[#E7E1D7] px-3 " +
  "placeholder:text-[#9AA1AA] focus-visible:ring-2 focus-visible:ring-[#D8B878] " +
  "focus-visible:border-[#D8B878] transition-shadow";

export default function EstimateModal({
  isOpen,
  onClose,
  onSubmit,
}: EstimateModalProps) {
  // Keep hooks in a stable, unconditional order:
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    type: "",
    message: "",
  });

  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  // Body scroll lock + ESC close only while open
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      await onSubmit?.(formData);

      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D8B878", "#1F2A3A", "#FFFFFF"],
      });

      toast.success("Thank you! We'll contact you soon.", {
        icon: <Sparkles className="w-4 h-4" />,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        type: "",
        message: "",
      });
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  // Always render the portal; just hide it when closed
  return createPortal(
    <div
      className={`fixed inset-0 z-[60] grid place-items-center p-4 bg-black/50 supports-[backdrop-filter]:backdrop-blur-sm transition-opacity duration-200
        ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      onMouseDown={onBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-white/85 backdrop-blur-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 id={titleId} className="text-xl sm:text-2xl font-bold">
              Request Free Estimate
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-[#D8B878]"
              aria-label="Close modal"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body (scrolls) */}
        <div className="px-6 py-5 max-h-[70vh] overflow-y-auto">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Name */}
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={fieldBase}
                placeholder="e.g., Jane Doe"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={fieldBase}
                placeholder="you@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="tel"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={fieldBase}
                placeholder="(626) 430-4003"
              />
            </div>

            {/* City */}
            <div>
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                name="address-level2"
                autoComplete="address-level2"
                required
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className={fieldBase}
                placeholder="e.g., Irvine"
              />
            </div>

            {/* Blind Type */}
            <div className="md:col-span-2">
              <Label htmlFor="type">Blind Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) =>
                  setFormData({ ...formData, type: value })
                }
              >
                <SelectTrigger
                  id="type"
                  className={fieldBase + " h-11 justify-between"}
                >
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  sideOffset={6}
                  className="z-[70] rounded-xl border border-slate-200 bg-white shadow-2xl"
                >
                  <SelectItem
                    value="level-2"
                    className="rounded-lg h-10 data-[state=checked]:bg-[#D8B878] data-[state=checked]:text-white focus:bg-[#D8B878]/15"
                  >
                    Level 2 Zip Track
                  </SelectItem>
                  <SelectItem
                    value="level-1"
                    className="rounded-lg h-10 data-[state=checked]:bg-[#D8B878] data-[state=checked]:text-white focus:bg-[#D8B878]/15"
                  >
                    Level 1 Wire Secured
                  </SelectItem>
                  <SelectItem
                    value="not-sure"
                    className="rounded-lg h-10 data-[state=checked]:bg-[#D8B878] data-[state=checked]:text-white focus:bg-[#D8B878]/15"
                  >
                    Not sure yet
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={
                  "mt-1 min-h-[110px] rounded-xl bg-[#F7F4ED] border border-[#E7E1D7] " +
                  "placeholder:text-[#9AA1AA] focus-visible:ring-2 focus-visible:ring-[#D8B878] " +
                  "focus-visible:border-[#D8B878]"
                }
                placeholder="Tell us about your project…"
              />
            </div>

            {/* Actions */}
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 rounded-xl h-11 border-2"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={submitting}
                className="flex-1 rounded-xl h-11 bg-[#1F2A3A] hover:bg-[#2A3A52]"
              >
                {submitting ? "Sending…" : "Submit Request"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
