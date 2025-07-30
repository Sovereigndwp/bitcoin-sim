import React from 'react';

interface BarterStoryProps {
  onComplete: () => void;
}

export const BarterStory: React.FC<BarterStoryProps> = ({ onComplete }) => (
  <div className="rounded-xl p-8 bg-card shadow-xl card-hover space-y-6">
    <h3 className="text-3xl font-semibold">🏺 Barter World: Why We Invented Money</h3>
    <div className="prose max-w-none space-y-4">
      <p>Imagine waking up in a world with no money—no coins, no bills, pure barter.</p>
      <p>
        You need shoes, but the shoemaker wants bread. Someone else fixes roofs but wants fish. If you can’t find the exact match, you can’t trade.
      </p>
      <p>Barter makes trade slow, savings risky (food spoils), and price comparison impossible.</p>
      <p className="font-semibold text-xl text-accent-orange">Without money, life gets frustrating fast.</p>
    </div>
    <div className="p-6 bg-[rgba(247,147,26,0.1)] border border-[rgba(247,147,26,0.3)] rounded-xl glow-orange">
      <h4 className="font-semibold text-xl text-accent-orange">💬 Why This Matters Today</h4>
      <p>Imagine missing a project deadline because you had to barter every notebook and snack—money frees you to focus on what truly matters.</p>
    </div>
    <button
      onClick={onComplete}
      className="px-8 py-3 rounded-xl font-semibold text-lg bg-accent-orange text-bg-primary transition-all glow-orange hover:glow-bright"
    >
      Complete Story
    </button>
  </div>
);
