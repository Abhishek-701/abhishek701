import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  prepareWithSegments,
  layout,
  walkLineRanges,
} from "@chenglou/pretext";

// Font that canvas can accurately measure (matches text-sm / 14px sans)
const FONT = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const LINE_HEIGHT = 20;
const PAD_H = 12; // horizontal padding inside bubble
const PAD_V = 8;  // vertical padding inside bubble
// Max content width inside a bubble (container is ~300px, bubble max 80%)
const MAX_CONTENT_W = 210;

type Message = {
  from: "them" | "me";
  text: string;
};

const messages: Message[] = [
  { from: "them", text: "Hey! Where are you currently based?" },
  { from: "me",   text: "Chicago, IL 📍" },
  { from: "them", text: "What's your background?" },
  { from: "me",   text: "MS CS at UIC — 3.72 GPA. 3 internships building ETL pipelines, dashboards, and REST APIs." },
  { from: "them", text: "What kind of roles are you targeting?" },
  { from: "me",   text: "Full Stack & Backend — microservices, distributed systems, cloud-native platforms." },
  { from: "them", text: "What do you do outside of coding?" },
  { from: "me",   text: "Soccer, basketball, squash ⚡" },
];

/**
 * Uses pretext's binary search to find the minimum width (in content px)
 * that wraps the text at the same line count as the given maxWidth.
 * This is the same technique iMessage uses to "shrink" bubbles to fit content.
 */
function findTightContentWidth(text: string): number {
  try {
    const prepared = prepareWithSegments(text, FONT);
    // Step 1: how many lines does it take at MAX_CONTENT_W?
    const { lineCount } = layout(prepared, MAX_CONTENT_W, LINE_HEIGHT);

    // Step 2: binary search for the minimum width that keeps the same lineCount
    let lo = 1;
    let hi = MAX_CONTENT_W;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (layout(prepared, mid, LINE_HEIGHT).lineCount <= lineCount) hi = mid;
      else lo = mid + 1;
    }

    // Step 3: walk the lines at that width to get the actual max line width
    let maxLineW = 0;
    walkLineRanges(prepared, lo, (line) => {
      if (line.width > maxLineW) maxLineW = line.width;
    });

    return Math.ceil(maxLineW);
  } catch {
    return MAX_CONTENT_W;
  }
}

export function ChatBubbles() {
  // Tight content widths per bubble, measured by pretext
  const [contentWidths, setContentWidths] = useState<number[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Measure all bubbles with pretext on mount (canvas only, zero DOM reflow)
  useEffect(() => {
    setContentWidths(messages.map((m) => findTightContentWidth(m.text)));
  }, []);

  // Trigger the sequential reveal once in view
  useEffect(() => {
    if (!isInView || contentWidths.length === 0) return;

    setVisibleCount(1);

    let delay = 400;
    for (let i = 1; i < messages.length; i++) {
      const typingStart = delay;
      const msgStart = delay + 750;
      const nextDelay = msgStart + 250;

      ((idx: number, ts: number, ms: number) => {
        setTimeout(() => setShowTyping(true), ts);
        setTimeout(() => {
          setShowTyping(false);
          setVisibleCount(idx + 1);
        }, ms);
      })(i, typingStart, msgStart);

      delay = nextDelay;
    }
  }, [isInView, contentWidths.length]);

  return (
    <div
      ref={ref}
      className="flex h-full flex-col gap-2 overflow-hidden rounded-2xl border border-[#E8E4D8] bg-white p-4"
      style={{ minHeight: 340 }}
    >
      <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#BBBBBB]">
        Quick intro
      </p>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {messages.slice(0, visibleCount).map((msg, i) => {
          const contentW = contentWidths[i] ?? MAX_CONTENT_W;
          const bubbleW = contentW + PAD_H * 2;
          const isMe = msg.from === "me";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                style={{
                  width: bubbleW,
                  paddingTop: PAD_V,
                  paddingBottom: PAD_V,
                  paddingLeft: PAD_H,
                  paddingRight: PAD_H,
                  borderRadius: isMe
                    ? "14px 14px 4px 14px"
                    : "14px 14px 14px 4px",
                  backgroundColor: isMe ? "#0047FF" : "#F1F0EE",
                  color: isMe ? "#fff" : "#111111",
                  fontSize: 14,
                  lineHeight: `${LINE_HEIGHT}px`,
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  wordBreak: "break-word",
                }}
              >
                {msg.text}
              </div>
            </motion.div>
          );
        })}

        {/* Typing indicator */}
        <AnimatePresence>
          {showTyping && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.18 }}
              className="flex justify-start"
            >
              <div
                className="flex items-center gap-[5px] px-4 py-3"
                style={{
                  backgroundColor: "#F1F0EE",
                  borderRadius: "14px 14px 14px 4px",
                }}
              >
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="block h-[7px] w-[7px] rounded-full bg-[#AAAAAA]"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: d * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
