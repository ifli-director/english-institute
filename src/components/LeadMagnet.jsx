"use client";
import { ArrowRight, BookOpenCheck, LockKeyhole, PlayCircle } from "lucide-react";
import { SAMPLE_CLASSROOM_URL } from "@/lib/site";

export default function LeadMagnetSection() {
  return (
    <section id="free-resources" className="bg-surface px-5 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-line bg-white lg:grid-cols-[1fr_.85fr]">
        <div className="bg-brand-blue p-7 text-white sm:p-10 lg:p-14">
          <p className="font-bold text-brand-red">Free plan</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em]">See how IFLI learning feels.</h2>
          <p className="mt-5 leading-7 text-white/80">Get instant access to a sample Google Classroom before you choose a paid plan.</p>
          <ul className="mt-8 space-y-5">{[[PlayCircle, "A one-hour sample class recording"], [BookOpenCheck, "A taste of the digital library"], [LockKeyhole, "No payment and no commitment"]].map(([Icon, text]) => <li key={text} className="flex items-center gap-3"><Icon className="size-6 text-brand-red" aria-hidden="true" /><span className="font-semibold">{text}</span></li>)}</ul>
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <h3 className="text-2xl font-extrabold text-brand-blue-dark">Open your sample classroom</h3>
          <p className="mt-2 text-sm leading-6 text-brand-blue-muted">Join our sample Google Classroom in one click. No sign-up form, no payment.</p>
          <a
            href={SAMPLE_CLASSROOM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 font-bold text-white hover:bg-brand-red-dark"
          >
            Open the sample classroom
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
          <p className="mt-4 text-xs leading-5 text-brand-blue-muted">You will need a Google account to join the classroom.</p>
        </div>
      </div>
    </section>
  );
}
