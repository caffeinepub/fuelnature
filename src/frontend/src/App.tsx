import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import {
  bites,
  eliteBites,
  eliteMeals,
  elitePlans,
  meals,
  plans,
} from "@/data/meals";
import type { Bite, EliteBite, EliteMeal, Meal } from "@/data/meals";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CreditCard,
  Heart,
  Leaf,
  MapPin,
  Menu,
  ShoppingBag,
  Smartphone,
  Star,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const goalColors: Record<string, string> = {
  Strength: "bg-red-100 text-red-700",
  Endurance: "bg-blue-100 text-blue-700",
  Flexibility: "bg-purple-100 text-purple-700",
  Recovery: "bg-green-100 text-green-700",
};

const typeColors: Record<string, string> = {
  "Pre-Workout": "bg-orange-100 text-orange-700",
  "Post-Workout": "bg-teal-100 text-teal-700",
};

function MealCard({ meal, index }: { meal: Meal; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-2xl overflow-hidden shadow-card bg-card border border-border group hover:shadow-lg transition-shadow duration-300"
      data-ocid={`meals.item.${index + 1}`}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${goalColors[meal.goal]}`}
          >
            {meal.goal}
          </span>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${typeColors[meal.type]}`}
          >
            {meal.type}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-1">{meal.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {meal.description}
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground border-t border-border pt-3 mb-3">
          <span>
            <strong className="text-foreground">{meal.calories}</strong> kcal
          </span>
          <span>
            <strong className="text-foreground">{meal.protein}g</strong> protein
          </span>
          <span>
            <strong className="text-foreground">{meal.carbs}g</strong> carbs
          </span>
          <span>
            <strong className="text-foreground">{meal.fat}g</strong> fat
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-extrabold text-brand-orange">
            &#8377;{meal.price}
          </span>
          <span className="text-xs text-muted-foreground">per meal</span>
        </div>
      </div>
    </motion.div>
  );
}

function BiteCard({ bite, index }: { bite: Bite; index: number }) {
  const handleAdd = () => {
    toast.success(`${bite.name} added! Pick up before your next session.`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-2xl overflow-hidden bg-card border border-border shadow-card group hover:shadow-lg transition-shadow duration-300 flex flex-col"
      data-ocid={`bites.item.${index + 1}`}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={bite.image}
          alt={bite.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-bold bg-orange-500 text-white px-2 py-1 rounded-full">
            {bite.calories} kcal
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-base text-foreground mb-1">
          {bite.name}
        </h3>
        <p className="text-muted-foreground text-xs mb-3 line-clamp-2 leading-relaxed">
          {bite.description}
        </p>
        <div className="mb-3">
          <span className="inline-flex items-center gap-1 text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
            &#9889; {bite.keyBenefit}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mb-1 font-medium">
          Ingredients:
        </p>
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
          {bite.ingredients.join(" · ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-xl font-extrabold text-brand-orange">
              &#8377;{bite.price}
            </span>
            <span className="text-xs text-muted-foreground ml-1">
              / pack of 2
            </span>
          </div>
          <Button
            size="sm"
            className="rounded-full bg-brand-orange hover:opacity-90 text-white text-xs font-semibold px-4"
            onClick={handleAdd}
            data-ocid={`bites.primary_button.${index + 1}`}
          >
            <ShoppingBag className="w-3 h-3 mr-1.5" />
            Add to Order
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function EliteMealCard({ meal, index }: { meal: EliteMeal; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-2xl overflow-hidden border border-[oklch(0.78_0.14_82/0.4)] bg-[oklch(0.19_0.015_250)] group hover:border-[oklch(0.78_0.14_82/0.7)] transition-all duration-300 elite-glow-sm"
      data-ocid={`elite-meals.item.${index + 1}`}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <span className="text-xs font-bold bg-[oklch(0.78_0.14_82)] text-[oklch(0.14_0.01_240)] px-2.5 py-1 rounded-full">
            ✦ Elite
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-black/50 text-white/80">
            {meal.goal}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base text-white mb-1 leading-snug">
          {meal.name}
        </h3>
        <p className="text-white/50 text-xs mb-4 line-clamp-2 leading-relaxed">
          {meal.description}
        </p>
        <div className="mb-3">
          <p className="text-[10px] text-[oklch(0.78_0.14_82)] font-semibold uppercase tracking-wider mb-1.5">
            Branded Ingredients
          </p>
          <div className="flex flex-wrap gap-1">
            {meal.brandedIngredients.map((ing) => (
              <span
                key={ing}
                className="text-[10px] bg-[oklch(0.78_0.14_82/0.12)] text-[oklch(0.78_0.14_82)] border border-[oklch(0.78_0.14_82/0.25)] rounded-full px-2 py-0.5"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span className="text-lg font-extrabold text-[oklch(0.78_0.14_82)]">
            &#8377;{meal.price}
          </span>
          <span className="text-xs text-white/30">per meal</span>
        </div>
      </div>
    </motion.div>
  );
}

function EliteBiteCard({ bite, index }: { bite: EliteBite; index: number }) {
  const handleAdd = () => {
    // toast handled inline
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden border border-[oklch(0.78_0.14_82/0.4)] bg-[oklch(0.19_0.015_250)] group hover:border-[oklch(0.78_0.14_82/0.7)] transition-all duration-300 elite-glow-sm flex flex-col"
      data-ocid={`elite-bites.item.${index + 1}`}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={bite.image}
          alt={bite.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-bold bg-[oklch(0.78_0.14_82)] text-[oklch(0.14_0.01_240)] px-2 py-0.5 rounded-full">
            ✦ Elite
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-xs font-bold bg-black/50 text-white px-2 py-0.5 rounded-full">
            {bite.calories} kcal
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-sm text-white mb-1">{bite.name}</h3>
        <p className="text-white/50 text-xs mb-3 line-clamp-2 leading-relaxed">
          {bite.description}
        </p>
        <span className="inline-flex items-center gap-1 text-xs font-semibold bg-[oklch(0.78_0.14_82/0.15)] text-[oklch(0.78_0.14_82)] border border-[oklch(0.78_0.14_82/0.3)] rounded-full px-2.5 py-1 mb-3 w-fit">
          ✦ {bite.keyBenefit}
        </span>
        <p className="text-xs text-white/30 mb-4">
          {bite.ingredients.join(" · ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-xl font-extrabold text-[oklch(0.78_0.14_82)]">
              &#8377;{bite.price}
            </span>
            <span className="text-xs text-white/30 ml-1">
              / pack of {bite.packSize}
            </span>
          </div>
          <Button
            size="sm"
            className="rounded-full bg-[oklch(0.78_0.14_82)] hover:opacity-90 text-[oklch(0.14_0.01_240)] text-xs font-bold px-4"
            onClick={() => {
              handleAdd();
            }}
            data-ocid={`elite-bites.primary_button.${index + 1}`}
          >
            <ShoppingBag className="w-3 h-3 mr-1.5" />
            Order
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

const UPI_ID = "8860126575@pytes";

function SubscribeModal({
  open,
  onClose,
  selectedPlan,
}: {
  open: boolean;
  onClose: () => void;
  selectedPlan: string;
}) {
  const [form, setForm] = useState({ name: "", email: "", plan: selectedPlan });
  const [step, setStep] = useState<"form" | "payment" | "done">("form");
  const [loading, setLoading] = useState(false);
  const [showNetBankingTip, setShowNetBankingTip] = useState(false);

  const allPlans = [...plans, ...elitePlans];
  const selectedPlanData = allPlans.find((p) => p.id === form.plan);
  // Extract numeric amount for UPI deep link (strip ₹ and commas)
  const planAmountRaw = selectedPlanData?.price?.replace(/[₹,]/g, "") ?? "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.plan) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("payment");
    }, 900);
  };

  const handleDonePaying = () => {
    setStep("done");
    toast.success("Thanks! We'll confirm your order once we receive payment.");
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("form");
      setLoading(false);
      setShowNetBankingTip(false);
      setForm({ name: "", email: "", plan: selectedPlan });
    }, 300);
  };

  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=FuelNature&am=${planAmountRaw}&cu=INR`;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md" data-ocid="subscribe.dialog">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Leaf className="text-brand-green w-5 h-5" />
            {step === "form"
              ? "Start Your FuelNature Journey"
              : step === "payment"
                ? "Complete Your Payment"
                : "Order Confirmed!"}
          </DialogTitle>
        </DialogHeader>
        <AnimatePresence mode="wait">
          {step === "done" ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
              data-ocid="subscribe.success_state"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thanks, {form.name}!</h3>
              <p className="text-muted-foreground text-sm">
                We've received your plan request. Once we confirm your payment,
                your meals will be on their way. Check{" "}
                <strong>{form.email}</strong> for updates.
              </p>
              <Button
                className="mt-6 rounded-full bg-brand-orange hover:opacity-90 text-white"
                onClick={handleClose}
                data-ocid="subscribe.close_button"
              >
                Back to FuelNature
              </Button>
            </motion.div>
          ) : step === "payment" ? (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4 pt-1"
              data-ocid="subscribe.panel"
            >
              {/* Plan summary */}
              <div className="rounded-xl bg-brand-green/10 border border-brand-green/20 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    Selected Plan
                  </p>
                  <p className="font-bold text-foreground">
                    {selectedPlanData?.name ?? form.plan}
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-brand-green">
                  {selectedPlanData?.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    {selectedPlanData?.period}
                  </span>
                </span>
              </div>

              {/* Payment method buttons */}
              <div className="grid grid-cols-1 gap-2">
                <a
                  href={upiDeepLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-brand-green hover:opacity-90 text-white font-semibold py-2.5 px-4 transition-opacity text-sm"
                  data-ocid="subscribe.primary_button"
                >
                  <Smartphone className="w-4 h-4" />
                  Pay via UPI (BHIM / PhonePe / GPay / Paytm)
                </a>
                <button
                  type="button"
                  onClick={() => setShowNetBankingTip((v) => !v)}
                  className="flex items-center justify-center gap-2 w-full rounded-full border-2 border-brand-green/40 hover:border-brand-green/70 text-brand-green font-semibold py-2.5 px-4 transition-colors text-sm"
                  data-ocid="subscribe.secondary_button"
                >
                  <CreditCard className="w-4 h-4" />
                  Net Banking / Other Methods
                </button>
              </div>

              <AnimatePresence>
                {showNetBankingTip && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-xl bg-muted/60 border border-border px-4 py-3 text-sm text-muted-foreground space-y-1">
                      <p className="font-semibold text-foreground">
                        How to pay via Net Banking:
                      </p>
                      <ol className="list-decimal list-inside space-y-1 text-xs">
                        <li>
                          Open your bank&apos;s mobile app or internet banking
                          portal.
                        </li>
                        <li>
                          Go to <strong>UPI / IMPS / NEFT Transfer</strong>.
                        </li>
                        <li>
                          Enter the UPI ID shared via email or WhatsApp after
                          order confirmation.
                        </li>
                        <li>
                          Enter the plan amount in{" "}
                          <strong>₹ Indian Rupees</strong>.
                        </li>
                        <li>Confirm and complete the transfer.</li>
                      </ol>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* After payment note */}
              <div className="rounded-xl bg-yellow-50 border border-yellow-200 px-4 py-3 text-xs text-yellow-800">
                <p className="font-semibold mb-0.5">📸 After Payment</p>
                <p>
                  Share your payment screenshot on WhatsApp or email{" "}
                  <a
                    href="mailto:tanu50082@gmail.com"
                    className="underline font-medium"
                  >
                    tanu50082@gmail.com
                  </a>{" "}
                  to confirm your order.
                </p>
              </div>

              <Button
                className="w-full rounded-full bg-brand-orange hover:opacity-90 text-white font-semibold"
                onClick={handleDonePaying}
                data-ocid="subscribe.confirm_button"
              >
                Done, I&apos;ve Paid ✓
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="space-y-1.5">
                <Label htmlFor="sub-name">Full Name</Label>
                <Input
                  id="sub-name"
                  placeholder="Arjun Sharma"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  required
                  data-ocid="subscribe.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="sub-email">Email Address</Label>
                <Input
                  id="sub-email"
                  type="email"
                  placeholder="arjun@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  required
                  data-ocid="subscribe.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label>Plan</Label>
                <Select
                  value={form.plan}
                  onValueChange={(val) => setForm((f) => ({ ...f, plan: val }))}
                >
                  <SelectTrigger data-ocid="subscribe.select">
                    <SelectValue placeholder="Choose a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...plans, ...elitePlans].map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.name} — {p.price}
                        {p.period}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-brand-orange hover:opacity-90 text-white font-semibold"
                disabled={loading}
                data-ocid="subscribe.submit_button"
              >
                {loading ? "Preparing your plan..." : "Proceed to Payment →"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                No commitment. Cancel anytime. 100% plant-powered.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [pricingTab, setPricingTab] = useState<"standard" | "elite">(
    "standard",
  );
  const [menuFilter, setMenuFilter] = useState<
    "All" | "Pre-Workout" | "Post-Workout"
  >("All");
  const [goalFilter, setGoalFilter] = useState<
    "All" | "Strength" | "Endurance" | "Flexibility" | "Recovery"
  >("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const openModal = (planId: string) => {
    setSelectedPlan(planId);
    setModalOpen(true);
  };

  const filteredMeals = meals.filter((m) => {
    const typeMatch = menuFilter === "All" || m.type === menuFilter;
    const goalMatch = goalFilter === "All" || m.goal === goalFilter;
    return typeMatch && goalMatch;
  });

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    toast.success("Subscribed! You'll receive our weekly meal inspiration.");
    setNewsletterEmail("");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Toaster position="top-right" />

      {/* MACRO CALLOUT BAR */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-brand-green text-white text-center text-xs sm:text-sm font-semibold py-2 px-4 shadow-sm">
        🌿 All items are pre &amp; post workout ready · 100% natural vegetarian
        · Macros covered as per standards — no counting needed
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 font-bold text-xl text-foreground hover:opacity-80 transition-opacity"
            data-ocid="nav.link"
          >
            <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span>
              <span className="text-brand-green-deep">Fuel</span>Nature
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Plans", id: "pricing" },
              { label: "Menu", id: "menu" },
              { label: "Bites", id: "bites" },
              { label: "Goals", id: "features" },
              { label: "About", id: "about" },
            ].map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="nav.link"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className="hidden md:flex rounded-full bg-brand-orange hover:opacity-90 text-white font-semibold px-5"
              onClick={() => openModal("monthly")}
              data-ocid="nav.primary_button"
            >
              Get Started
            </Button>
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-background px-4 pb-4"
            >
              <div className="flex flex-col gap-3 pt-3">
                {[
                  { label: "Plans", id: "pricing" },
                  { label: "Menu", id: "menu" },
                  { label: "Bites", id: "bites" },
                  { label: "Elite", id: "elite" },
                  { label: "Delivery", id: "delivery" },
                  { label: "About", id: "about" },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left text-sm font-semibold text-muted-foreground hover:text-foreground py-2"
                    data-ocid="nav.link"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  className="rounded-full bg-brand-orange text-white font-semibold mt-2"
                  onClick={() => {
                    openModal("monthly");
                    setMobileMenuOpen(false);
                  }}
                  data-ocid="nav.primary_button"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed callout bar */}
      <div className="h-8" />

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-16"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-green text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Vegetarian Power Meals
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight mb-6"
          >
            Fuel Your Workout,
            <br />
            Recover Stronger.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-white/80 mb-10 max-w-xl mx-auto"
          >
            Chef-prepared, plant-powered meals delivered daily across Old
            Gurgaon &amp; Delhi NCR.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            {[
              { emoji: "🥦", text: "100% Natural Vegetarian" },
              { emoji: "⚡", text: "Pre & Post Workout Ready" },
              { emoji: "✅", text: "Macros Covered as Per Standards" },
            ].map((pill) => (
              <span
                key={pill.text}
                className="inline-flex items-center gap-1.5 bg-white/15 border border-white/30 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-white"
              >
                {pill.emoji} {pill.text}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="rounded-full bg-brand-orange hover:opacity-90 text-white font-bold text-base px-8 py-6"
              onClick={() => scrollTo("pricing")}
              data-ocid="hero.primary_button"
            >
              Explore Meal Plans
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white text-white hover:bg-white/10 font-semibold text-base px-8 py-6 bg-transparent"
              onClick={() => scrollTo("menu")}
              data-ocid="hero.secondary_button"
            >
              View Menu
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* SERVICE AREA BANNER */}
      <div className="bg-amber-50 border-y border-amber-200 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap text-center">
          <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <p className="text-sm font-semibold text-amber-800">
            Now delivering across Gurgaon &mdash;{" "}
            <span className="font-extrabold text-amber-900">
              Old Gurgaon, Palam Vihar, Udyog Vihar &amp; more zones live now
            </span>
          </p>
          <Badge className="bg-amber-500 text-white border-0 text-xs font-bold ml-1 rounded-full">
            Live Now
          </Badge>
        </div>
      </div>

      {/* DELIVERY ZONES */}
      <section id="delivery" className="py-16 bg-[oklch(0.14_0.01_240)]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[oklch(0.78_0.14_82)] text-xs font-semibold tracking-widest uppercase mb-3">
              Coverage Map
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Delivering Across Gurgaon
            </h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto text-sm">
              We&apos;re expanding zone by zone. Check if your area is live
              &mdash; more zones launching every week.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {[
              { name: "Old Gurgaon", live: true },
              { name: "Sector 14", live: true },
              { name: "Sector 17", live: true },
              { name: "Palam Vihar", live: true },
              { name: "Udyog Vihar Phase 1–5", live: true },
              { name: "DLF Phase 1–5", live: false },
              { name: "Cyber City", live: false },
              { name: "Golf Course Road", live: false },
              { name: "Sohna Road", live: false },
              { name: "South City", live: false },
              { name: "Manesar", live: false },
              { name: "Sector 56", live: false },
            ].map((zone, i) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative rounded-xl p-4 border flex flex-col gap-2 ${
                  zone.live
                    ? "bg-[oklch(0.19_0.025_135)] border-[oklch(0.65_0.07_135/0.5)] zone-live-glow"
                    : "bg-[oklch(0.17_0.008_240)] border-white/10"
                }`}
                data-ocid={`delivery.item.${i + 1}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p
                    className={`text-sm font-bold leading-tight ${zone.live ? "text-white" : "text-white/40"}`}
                  >
                    {zone.name}
                  </p>
                  {zone.live ? (
                    <span className="flex-shrink-0 inline-flex items-center gap-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-2 py-0.5 text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <span className="flex-shrink-0 inline-flex items-center gap-1 bg-white/5 text-white/30 border border-white/10 rounded-full px-2 py-0.5 text-[10px] font-bold">
                      Soon
                    </span>
                  )}
                </div>
                {zone.live && (
                  <p className="text-[10px] text-green-400/70">
                    Same-day delivery
                  </p>
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs">
            Want your area covered?{" "}
            <span className="text-[oklch(0.78_0.14_82)] font-semibold cursor-pointer hover:underline">
              Drop us a request →
            </span>
          </p>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT BAR */}
      <section id="features" className="bg-brand-green py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {[
              {
                icon: Zap,
                label: "Strength",
                desc: "High-protein meals to build and maintain lean muscle mass",
              },
              {
                icon: Wind,
                label: "Endurance",
                desc: "Complex carbs and antioxidants to power long training sessions",
              },
              {
                icon: Heart,
                label: "Flexibility",
                desc: "Anti-inflammatory ingredients to support joint health and recovery",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center text-white px-8 py-6"
              >
                <item.icon className="w-8 h-8 mb-3 opacity-90" />
                <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                <p className="text-white/75 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-brand-green text-xs font-semibold tracking-widest uppercase mb-3">
              Simple Process
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              How It Works
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-start">
            {[
              {
                step: "1",
                icon: "\uD83C\uDFAF",
                label: "Select Plan",
                desc: "Pick daily, weekly or monthly",
              },
              {
                step: "2",
                icon: "\uD83E\uDD57",
                label: "Customise Menu",
                desc: "Choose meals matching your goals",
              },
              {
                step: "3",
                icon: "\uD83D\uDCCB",
                label: "Build Your Plan",
                desc: "We craft your personal nutrition schedule",
              },
              {
                step: "4",
                icon: "\uD83D\uDE9A",
                label: "Delivered Fresh",
                desc: "Same-day delivery to your door",
              },
              {
                step: "5",
                icon: "\uD83D\uDCAA",
                label: "Fuel & Recover",
                desc: "Train harder, recover smarter",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="flex flex-col md:flex-row items-center gap-2"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex flex-col items-center text-center flex-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-cream border-2 border-border flex items-center justify-center text-2xl mb-3 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">
                    Step {item.step}
                  </span>
                  <h4 className="font-bold text-sm text-foreground mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
                {i < 4 && (
                  <ChevronRight className="hidden md:block w-5 h-5 text-border flex-shrink-0 -mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-brand-green text-xs font-semibold tracking-widest uppercase mb-3">
              Subscribe &amp; Save
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Fresh vegetarian meals crafted for your fitness goals. No
              contracts, cancel anytime.
            </p>
          </motion.div>

          {/* Plan Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full border border-border bg-card p-1 gap-1">
              <button
                type="button"
                onClick={() => setPricingTab("standard")}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
                  pricingTab === "standard"
                    ? "bg-brand-green text-white shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-ocid="pricing.tab"
              >
                Standard
              </button>
              <button
                type="button"
                onClick={() => setPricingTab("elite")}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all flex items-center gap-1.5 ${
                  pricingTab === "elite"
                    ? "bg-[oklch(0.78_0.14_82)] text-[oklch(0.14_0.01_240)] shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-ocid="pricing.tab"
              >
                ✦ Elite
              </button>
            </div>
          </div>

          {pricingTab === "standard" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`relative rounded-2xl border p-6 flex flex-col ${
                    plan.highlight
                      ? "border-brand-orange bg-brand-peach shadow-lg scale-[1.02]"
                      : "border-border bg-card shadow-card"
                  }`}
                  data-ocid={`pricing.item.${i + 1}`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-brand-orange text-white font-bold px-3 py-1 text-xs rounded-full border-0">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.meals}
                  </p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-extrabold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-brand-green-deep mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full rounded-full font-semibold ${
                      plan.highlight
                        ? "bg-brand-orange hover:opacity-90 text-white"
                        : "bg-brand-green hover:opacity-90 text-white"
                    }`}
                    onClick={() => openModal(plan.id)}
                    data-ocid={`pricing.primary_button.${i + 1}`}
                  >
                    Get {plan.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div>
              <p className="text-center text-muted-foreground text-sm mb-8 max-w-lg mx-auto">
                Elite plans use only certified branded ingredients:{" "}
                <span className="font-semibold text-foreground">
                  Conscious Food, Sattvic Foods, Organic India, True Elements
                </span>
                . Prices reflect uncompromised sourcing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {elitePlans.map((plan, i) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className={`relative rounded-2xl border p-6 flex flex-col elite-glow ${
                      i === 1
                        ? "border-[oklch(0.78_0.14_82)] bg-[oklch(0.19_0.015_250)] scale-[1.02]"
                        : "border-[oklch(0.78_0.14_82/0.4)] bg-[oklch(0.17_0.01_240)]"
                    }`}
                    data-ocid={`pricing.item.${i + 4}`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-[oklch(0.78_0.14_82)] text-[oklch(0.14_0.01_240)] font-bold px-3 py-1 text-xs rounded-full border-0">
                          {plan.badge}
                        </Badge>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[oklch(0.78_0.14_82)] text-xs font-bold">
                        ✦ ELITE
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-white/50 mb-4">{plan.meals}</p>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl font-extrabold text-[oklch(0.78_0.14_82)]">
                        {plan.price}
                      </span>
                      <span className="text-sm text-white/40">
                        {plan.period}
                      </span>
                    </div>
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-white/80"
                        >
                          <Check className="w-4 h-4 text-[oklch(0.78_0.14_82)] mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full rounded-full font-bold bg-[oklch(0.78_0.14_82)] hover:opacity-90 text-[oklch(0.14_0.01_240)]"
                      onClick={() => openModal(plan.id)}
                      data-ocid={`pricing.primary_button.${i + 4}`}
                    >
                      Get {plan.name}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FEATURED MEALS */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-brand-green text-xs font-semibold tracking-widest uppercase mb-3">
              This Week&apos;s Stars
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Featured Meals
            </h2>
            <p className="text-muted-foreground mt-3">
              Handcrafted by our nutritionist chefs with 100% natural, seasonal
              ingredients.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {meals.slice(0, 3).map((meal, i) => (
              <MealCard key={meal.id} meal={meal} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="rounded-full border-brand-green text-brand-green-deep hover:bg-brand-green hover:text-white font-semibold px-8"
              onClick={() => scrollTo("menu")}
              data-ocid="featured.secondary_button"
            >
              View Full Menu <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* PRE-WORKOUT BITES */}
      <section id="bites" className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className="text-brand-green text-xs font-semibold tracking-widest uppercase mb-3">
              Grab &amp; Go
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Pre-Workout Bites
            </h2>
            <p className="text-brand-orange font-semibold text-sm mt-1 mb-3">
              Low Cal, High Power
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              All-natural, vegetarian bites designed to fuel your workout.
              Macros calculated as per fitness standards — just grab and go.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 mt-6">
            {[
              { emoji: "\u26A1", text: "65\u201385 kcal per bite" },
              { emoji: "\uD83C\uDF3F", text: "100% natural ingredients" },
              { emoji: "\u2705", text: "No artificial additives" },
              { emoji: "\uD83C\uDFCB\uFE0F", text: "Performance-optimised" },
            ].map((item) => (
              <span
                key={item.text}
                className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-3 py-1.5 text-xs font-semibold text-foreground shadow-xs"
              >
                {item.emoji} {item.text}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {bites.map((bite, i) => (
              <BiteCard key={bite.id} bite={bite} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              className="rounded-full bg-brand-orange hover:opacity-90 text-white font-semibold px-8"
              onClick={() => openModal("daily")}
              data-ocid="bites.primary_button"
            >
              Add Bites to My Plan
            </Button>
          </div>
        </div>
      </section>

      {/* ELITE SECTION */}
      <section id="elite" className="py-20 bg-[oklch(0.14_0.01_240)]">
        <div className="max-w-5xl mx-auto px-4">
          {/* Elite Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[oklch(0.78_0.14_82)] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              ✦ &nbsp; Premium Membership &nbsp; ✦
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              FuelNature{" "}
              <span className="text-[oklch(0.78_0.14_82)]">Elite</span>
            </h2>
            <p className="text-white/60 text-base max-w-md mx-auto mb-6">
              Curated for the discerning athlete
            </p>
            <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
              Every Elite meal is built exclusively with certified brands
              &mdash;{" "}
              <span className="text-white/70 font-medium">Conscious Food</span>,{" "}
              <span className="text-white/70 font-medium">Sattvic Foods</span>,{" "}
              <span className="text-white/70 font-medium">Organic India</span>,
              and{" "}
              <span className="text-white/70 font-medium">True Elements</span>.
              No compromise on sourcing. No filler ingredients. Pure
              performance.
            </p>
          </motion.div>

          {/* Elite brand logos row */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {[
              "Conscious Food",
              "Organic India",
              "True Elements",
              "Sattvic Foods",
            ].map((brand) => (
              <span
                key={brand}
                className="text-xs font-bold text-[oklch(0.78_0.14_82)] border border-[oklch(0.78_0.14_82/0.35)] rounded-full px-4 py-1.5 bg-[oklch(0.78_0.14_82/0.07)]"
              >
                {brand}
              </span>
            ))}
          </div>

          {/* Elite Meal Cards */}
          <div className="mb-6">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-6 text-center">
              Elite Meals
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {eliteMeals.map((meal, i) => (
                <EliteMealCard key={meal.id} meal={meal} index={i} />
              ))}
            </div>
          </div>

          {/* Elite Bites */}
          <div className="mt-14">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-6 text-center">
              Elite Pre-Workout Bites
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {eliteBites.map((bite, i) => (
                <EliteBiteCard key={bite.id} bite={bite} index={i} />
              ))}
            </div>
          </div>

          {/* Elite CTA */}
          <div className="text-center mt-14">
            <p className="text-white/40 text-sm mb-5">
              Join the exclusive circle of performance-first athletes.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-[oklch(0.78_0.14_82)] hover:opacity-90 text-[oklch(0.14_0.01_240)] font-bold px-10 py-6 text-base elite-glow"
              onClick={() => {
                setPricingTab("elite");
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              data-ocid="elite.primary_button"
            >
              ✦ Explore Elite Plans
            </Button>
          </div>
        </div>
      </section>

      {/* FULL MENU */}
      <section id="menu" className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-brand-green text-xs font-semibold tracking-widest uppercase mb-3">
              Our Menu
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              All Meals
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
              Every meal is crafted for pre or post workout — grab it, eat it,
              train harder. No macro counting needed.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <div className="flex gap-2 flex-wrap justify-center">
              {(["All", "Pre-Workout", "Post-Workout"] as const).map((f) => (
                <button
                  type="button"
                  key={f}
                  onClick={() => setMenuFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                    menuFilter === f
                      ? "bg-brand-green text-white border-brand-green"
                      : "border-border text-muted-foreground hover:border-brand-green hover:text-brand-green-deep"
                  }`}
                  data-ocid="menu.tab"
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {(
                [
                  "All",
                  "Strength",
                  "Endurance",
                  "Flexibility",
                  "Recovery",
                ] as const
              ).map((g) => (
                <button
                  type="button"
                  key={g}
                  onClick={() => setGoalFilter(g)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                    goalFilter === g
                      ? "bg-brand-orange text-white border-brand-orange"
                      : "border-border text-muted-foreground hover:border-brand-orange hover:text-brand-orange"
                  }`}
                  data-ocid="menu.tab"
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {filteredMeals.length === 0 ? (
            <div
              className="text-center py-16 text-muted-foreground"
              data-ocid="menu.empty_state"
            >
              <p className="text-lg font-medium">
                No meals match these filters.
              </p>
              <p className="text-sm mt-2">
                Try selecting different goals or workout types.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMeals.map((meal, i) => (
                <MealCard key={meal.id} meal={meal} index={i} />
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Button
              className="rounded-full bg-brand-orange hover:opacity-90 text-white font-semibold px-8"
              onClick={() => openModal("weekly")}
              data-ocid="menu.primary_button"
            >
              Start My Meal Plan
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT + TESTIMONIALS + NEWSLETTER */}
      <section id="about" className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1 space-y-4"
            >
              <p className="text-brand-green text-xs font-semibold tracking-widest uppercase mb-3">
                What They Say
              </p>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Real Results, Real People
              </h2>
              {[
                {
                  quote:
                    "FuelNature completely transformed my performance. I PR'd my deadlift 3 months in a row after switching to their meal plans.",
                  name: "Arjun S.",
                  role: "Powerlifter, DLF Phase 2",
                  stars: 5,
                },
                {
                  quote:
                    "The pre-workout bites are a total game-changer. I grab the Peanut Oat Balls before every morning run and feel the difference.",
                  name: "Priya M.",
                  role: "Marathon Runner, Old Gurgaon",
                  stars: 5,
                },
              ].map((t, tIdx) => (
                <div
                  key={t.name}
                  className="bg-white border border-border rounded-2xl p-5 shadow-xs"
                  data-ocid={`testimonials.item.${tIdx + 1}`}
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={String(j)}
                        className="w-4 h-4 fill-brand-orange text-brand-orange"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed mb-4 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white text-xs font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <p className="text-brand-green text-xs font-semibold tracking-widest uppercase mb-3">
                Our Philosophy
              </p>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Why Plant-Powered?
              </h2>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Plants aren&apos;t just for salads &mdash; they&apos;re the
                foundation of elite athletic performance. Our nutritionists
                design every meal around the science of plant-based sports
                nutrition.
              </p>
              <ul className="space-y-3">
                {[
                  "Faster recovery with anti-inflammatory phytonutrients",
                  "Sustained energy from complex plant carbohydrates",
                  "Complete proteins from complementary plant sources",
                  "No artificial preservatives, sweeteners, or additives",
                  "Ethically sourced, locally grown seasonal produce",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <p className="text-brand-green text-xs font-semibold tracking-widest uppercase mb-3">
                Stay Inspired
              </p>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Weekly Meal Inspiration
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Get recipes, nutrition tips, and our chef&apos;s seasonal picks
                delivered to your inbox every week.
              </p>
              <form onSubmit={handleNewsletter} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="rounded-full"
                  required
                  data-ocid="newsletter.input"
                />
                <Button
                  type="submit"
                  className="w-full rounded-full bg-brand-orange hover:opacity-90 text-white font-semibold"
                  data-ocid="newsletter.submit_button"
                >
                  Subscribe to Newsletter
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">
                No spam, ever. Unsubscribe with one click.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { num: "30+", label: "Unique Meals" },
                  { num: "5K+", label: "Happy Athletes" },
                  { num: "100%", label: "Plant-Based" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-extrabold text-brand-orange">
                      {s.num}
                    </p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-footer-bg text-brand-footer-text py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg">
                  <span className="text-brand-green">Fuel</span>Nature
                </span>
              </div>
              <p className="text-sm opacity-70 leading-relaxed">
                100% natural vegetarian meals for pre &amp; post workout. Macros
                covered as per standards — just grab and go.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs opacity-60">
                <MapPin className="w-3.5 h-3.5" />
                <span>Old Gurgaon, Haryana</span>
              </div>
              <div className="mt-2">
                <a
                  href="mailto:tanu50082@gmail.com"
                  className="text-xs text-brand-green hover:opacity-80 transition-opacity"
                >
                  📧 tanu50082@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4 opacity-90">Explore</h4>
              <ul className="space-y-2">
                {[
                  { label: "Meal Plans", id: "pricing" },
                  { label: "Full Menu", id: "menu" },
                  { label: "Pre-Workout Bites", id: "bites" },
                  { label: "How It Works", id: "hero" },
                ].map((l) => (
                  <li key={l.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(l.id)}
                      className="text-sm opacity-60 hover:opacity-100 transition-opacity text-left"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4 opacity-90">Company</h4>
              <ul className="space-y-2">
                {["About Us"].map((l) => (
                  <li key={l}>
                    <span className="text-sm opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
                      {l}
                    </span>
                  </li>
                ))}
                <li>
                  <a
                    href="mailto:tanu50082@gmail.com"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-50">
            <p>
              &copy; {new Date().getFullYear()} FuelNature. All rights reserved.
            </p>
            <p>
              Built with &#10084;&#65039; using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      <SubscribeModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
