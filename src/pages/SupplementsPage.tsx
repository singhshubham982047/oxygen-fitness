import React, { useState } from 'react';
import { SUPPLEMENT_CATALOG, SUPPLEMENT_CATEGORIES, SupplementItem } from '../config/supplements.ts';
import { FOUNDER_INFO } from '../config/founder.ts';
import { useToast } from '../context/ToastContext.tsx';
import {
  ShieldCheck,
  Check,
  Search,
  ShoppingBag,
  X,
  Phone,
  Tag,
  MapPin,
  Sparkles
} from 'lucide-react';

export const SupplementsPage: React.FC = () => {
  const toast = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Reservation dialog state
  const [reserveItem, setReserveItem] = useState<SupplementItem | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<string>('');
  const [reserveName, setReserveName] = useState<string>('');
  const [reservePhone, setReservePhone] = useState<string>('');
  const [reservedSuccess, setReservedSuccess] = useState<boolean>(false);

  // Filter products by category and search
  const filteredSupplements = SUPPLEMENT_CATALOG.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenReserve = (item: SupplementItem) => {
    setReserveItem(item);
    setSelectedFlavor(item.flavors[0] || 'Standard');
    setReservedSuccess(false);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reserveName.trim() || !reservePhone.trim()) {
      toast.error('Incomplete Details', 'Please provide your name and phone number.');
      return;
    }

    setReservedSuccess(true);
    toast.success(
      'Supplement Reserved',
      `${reserveItem?.name} has been placed on hold at Oxygen Fitness Kailahat counter.`
    );
  };

  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-zinc-300">
          <ShieldCheck className="w-4 h-4 text-zinc-400" />
          <span>Oxygen Fitness Official Supplement Counter · Kailahat Bazaar</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
          100% Authentic Supplements. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Verified Indian Pricing.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
          Never risk counterfeit supplements from unverified online sellers. Browse our verified inventory available directly at Oxygen Fitness, Kailahat, Uttar Pradesh with authentic scratch verification codes.
        </p>

        {/* Verification Guarantee Pill */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-zinc-300" /> FSSAI Certified Batches
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-zinc-300" /> Genuine Importer Scratch Codes
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-zinc-300" /> Pick up at Kailahat Gym Counter
          </span>
        </div>
      </section>

      {/* Search and Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Live Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by brand, protein, or creatine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-zinc-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="text-xs text-neutral-400 flex items-center gap-2">
            <span>Direct Counter Hotline:</span>
            <a
              href={`tel:${FOUNDER_INFO.phoneRaw}`}
              className="text-zinc-200 font-bold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>{FOUNDER_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SUPPLEMENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-zinc-200 text-neutral-950 shadow-md font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Supplements Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredSupplements.map((item) => {
            const savings = item.mrpINR - item.priceINR;
            const savingsPercent = Math.round((savings / item.mrpINR) * 100);

            return (
              <div
                key={item.id}
                className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Image & Badges */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-neutral-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-950/85 backdrop-blur-md px-2.5 py-1 rounded text-white border border-neutral-800">
                        {item.brand}
                      </span>
                      {item.bestSeller && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-zinc-200 text-neutral-950 px-2 py-1 rounded">
                          Best Seller in India
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-neutral-950/90 backdrop-blur-md px-2 py-1 rounded border border-neutral-800 text-[10px] text-zinc-300 font-bold">
                      Save ₹{savings} ({savingsPercent}% OFF)
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-zinc-200 transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                      <span className="text-xs text-neutral-400 block mt-1 font-mono">
                        {item.weightOrServings}
                      </span>
                    </div>

                    {/* Price Block in Indian Rupee */}
                    <div className="flex items-baseline gap-2.5 py-2 border-y border-neutral-800">
                      <span className="text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                        ₹{item.priceINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-500 line-through">
                        ₹{item.mrpINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-zinc-300 font-semibold ml-auto">
                        In Stock (Kailahat)
                      </span>
                    </div>

                    {/* Nutrition / Key Highlight */}
                    {item.proteinPerServing && (
                      <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs">
                        <span className="text-neutral-400 block text-[10px] uppercase font-bold tracking-wider">
                          Key Nutrient Profile
                        </span>
                        <span className="font-semibold text-white">
                          {item.proteinPerServing}
                        </span>
                      </div>
                    )}

                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Available Flavors */}
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 block">
                        Available Flavors:
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-[11px] text-neutral-300">
                        {item.flavors.map((flavor, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300 text-[10px]"
                          >
                            {flavor}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-[10px] text-neutral-500 flex items-center gap-1.5 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{item.certification}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleOpenReserve(item)}
                    className="w-full py-3 rounded-xl bg-neutral-800 hover:bg-zinc-200 hover:text-neutral-950 text-white font-bold text-xs tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Reserve at Kailahat Counter</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reservation Modal */}
      {reserveItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-4 sm:p-8 max-h-[92vh] overflow-y-auto space-y-5 sm:space-y-6 relative shadow-2xl">
            <button
              onClick={() => setReserveItem(null)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!reservedSuccess ? (
              <form onSubmit={handleConfirmReservation} className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider">
                    Reserve for In-Gym Pickup
                  </span>
                  <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                    {reserveItem.name}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Pickup Location: Oxygen Fitness, Kailahat Kailahat bazaar, Uttar Pradesh 231305
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-neutral-400 block text-[10px]">Gym Price (INR)</span>
                    <span className="text-xl font-extrabold text-white">
                      ₹{reserveItem.priceINR.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-200 bg-neutral-800 px-2 py-1 rounded font-semibold border border-neutral-700">
                    Pay at Gym Counter
                  </span>
                </div>

                {/* Flavor Selection */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-neutral-300">
                    Select Flavor
                  </label>
                  <select
                    value={selectedFlavor}
                    onChange={(e) => setSelectedFlavor(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-zinc-400"
                  >
                    {reserveItem.flavors.map((flv, i) => (
                      <option key={i} value={flv}>
                        {flv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-neutral-300">
                    Your Name <span className="text-zinc-300">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={reserveName}
                    onChange={(e) => setReserveName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-zinc-400"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-neutral-300">
                    Mobile Number <span className="text-zinc-300">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="073803 03271 or +91 9876543210"
                    value={reservePhone}
                    onChange={(e) => setReservePhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-zinc-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-zinc-200 hover:bg-white text-neutral-950 font-bold text-xs tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Check className="w-4 h-4" />
                    <span>Confirm Hold at Kailahat Counter</span>
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center mt-2">
                    No online payment needed. Collect and verify scratch code at the gym desk.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 bg-neutral-800 border border-neutral-700 rounded-2xl flex items-center justify-center text-zinc-200 mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  Hold Confirmed!
                </h4>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  We have reserved 1x <strong>{reserveItem.name}</strong> ({selectedFlavor}) for{' '}
                  <strong className="text-white">{reserveName}</strong> at Oxygen Fitness, Kailahat bazaar.
                </p>
                <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 text-xs text-neutral-400">
                  Ready for collection during gym hours (5:30 AM – 10:00 PM). Hotline:{' '}
                  <a href={`tel:${FOUNDER_INFO.phoneRaw}`} className="text-zinc-200 font-bold underline">
                    {FOUNDER_INFO.phone}
                  </a>
                </div>
                <button
                  onClick={() => setReserveItem(null)}
                  className="px-6 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
