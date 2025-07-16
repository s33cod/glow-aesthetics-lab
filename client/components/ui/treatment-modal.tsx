import { Button } from "@/components/ui/button";
import { Calendar, Clock, Star, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TreatmentModalProps {
  treatment: {
    name: string;
    description: string;
    duration: string;
    price: string;
    details: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export function TreatmentModal({
  treatment,
  isOpen,
  onClose,
}: TreatmentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative max-w-2xl w-full mx-4 bg-background rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-gold/20 to-warm-beige/30 p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {treatment.name}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {treatment.duration}
                </div>
                <div className="text-2xl font-bold text-gold">
                  {treatment.price}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">
              About This Treatment
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {treatment.description}
            </p>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">
              What's Included
            </h3>
            <ul className="space-y-2">
              {treatment.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <Star className="h-4 w-4 mr-3 mt-0.5 text-gold fill-current flex-shrink-0" />
                  <span className="text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Information */}
          <div className="bg-gradient-to-br from-gold/5 to-warm-beige/10 rounded-xl p-4">
            <h3 className="font-semibold text-foreground mb-2">
              Important Information
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Consultation required for first-time clients</li>
              <li>• Results may vary based on individual skin type</li>
              <li>
                • Pre and post-treatment care instructions will be provided
              </li>
              <li>• 24-hour cancellation policy applies</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button
              className="flex-1 bg-gold hover:bg-gold/90 text-white font-semibold"
              asChild
              onClick={onClose}
            >
              <Link to="/booking">
                <Calendar className="mr-2 h-4 w-4" />
                Book This Treatment
              </Link>
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-gold text-gold hover:bg-gold/10"
              onClick={onClose}
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              View All Treatments
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
