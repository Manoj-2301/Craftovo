'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type FieldType = 'text' | 'textarea' | 'radio' | 'checkbox' | 'email' | 'date';

interface Field {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  other?: boolean;
  showIf?: {
    field: string;
    equals?: string;
    notEquals?: string;
  };
}

interface Step {
  id: string;
  title: string;
  desc: string;
  fields: Field[];
}

const STEPS: Step[] = [
  {
    id: 'business',
    title: 'About your business',
    desc: 'Tell us who you are and what this project needs to achieve.',
    fields: [
      { id: 'companyName', label: 'Company or brand name', type: 'text', required: true, placeholder: 'e.g. Riverstone Coffee Co.' },
      { id: 'businessDescription', label: 'What does your business do?', type: 'textarea', required: true, placeholder: 'One or two sentences is perfect.' },
      { id: 'industry', label: 'Industry', type: 'text', required: false, placeholder: 'e.g. Hospitality, SaaS, Retail' },
      { id: 'projectType', label: 'Is this a new site, a redesign, or a rebuild?', type: 'radio', required: true, options: ['New site', 'Redesign of an existing site', 'Rebuild on a new platform'] },
      { id: 'currentSiteUrl', label: 'Current website URL', type: 'text', required: false, placeholder: 'https://', showIf: { field: 'projectType', notEquals: 'New site' } },
      { id: 'primaryGoal', label: 'Primary goal of the website', type: 'radio', required: true, options: ['Generate leads', 'Sell products online', 'Book appointments', 'Inform or educate', 'Showcase portfolio', 'Other'], other: true },
      { id: 'successDefinition', label: 'What does success look like six months after launch?', type: 'textarea', required: true, placeholder: 'Be as specific as you can — traffic, leads, sales, time saved...' }
    ]
  },
  {
    id: 'audience',
    title: 'Your audience',
    desc: 'Who this site needs to speak to, and how they will use it.',
    fields: [
      { id: 'primaryAudience', label: 'Who is the primary audience?', type: 'textarea', required: true, placeholder: 'Age range, role, intent, where they come from...' },
      { id: 'secondaryAudience', label: 'Any secondary audiences?', type: 'textarea', required: false, placeholder: 'e.g. investors, press, job seekers' },
      { id: 'primaryDevice', label: 'What device do most visitors use?', type: 'radio', required: true, options: ['Mostly mobile', 'Mostly desktop', 'Fairly even split', 'Not sure yet'] },
      { id: 'primaryAction', label: 'What is the single most important action a visitor should take?', type: 'text', required: true, placeholder: 'e.g. Book a call, add to cart, submit a quote request' },
      { id: 'accessibility', label: 'Accessibility requirements', type: 'checkbox', required: false, options: ['WCAG AA compliance needed', 'Government or enterprise client', 'None known'], other: true }
    ]
  },
  {
    id: 'scope',
    title: 'Scope and features',
    desc: 'What the site needs to include and do.',
    fields: [
      { id: 'pages', label: 'Which pages or sections do you need?', type: 'checkbox', required: true, options: ['Home', 'About', 'Services', 'Products', 'Blog', 'Portfolio', 'Team', 'Pricing', 'FAQ', 'Contact', 'Careers'], other: true },
      { id: 'dynamicFeatures', label: 'Any dynamic functionality?', type: 'checkbox', required: false, options: ['Search', 'Filters', 'Booking or scheduling', 'E-commerce', 'User accounts / login', 'Dashboard', 'Forms with logic', 'Live chat', 'Multi-language'], other: true },
      { id: 'needsCms', label: 'Do you need a CMS so you can edit content yourself?', type: 'radio', required: true, options: ['Yes', 'No', 'Not sure'] },
      { id: 'cmsPreference', label: 'Any CMS preference?', type: 'text', required: false, placeholder: 'e.g. WordPress, Webflow, or open to a recommendation', showIf: { field: 'needsCms', notEquals: 'No' } },
      { id: 'integrations', label: 'Any required integrations?', type: 'checkbox', required: false, options: ['CRM', 'Email marketing', 'Payment gateway', 'Analytics', 'Chat widget', 'Calendar booking'], other: true },
      { id: 'futurePhases', label: 'Is this phase one of a larger roadmap?', type: 'radio', required: false, options: ['Yes', 'No'] },
      { id: 'futurePhasesDetail', label: 'What comes in later phases?', type: 'textarea', required: false, showIf: { field: 'futurePhases', equals: 'Yes' } }
    ]
  },
  {
    id: 'content',
    title: 'Content and assets',
    desc: 'What you’ll provide, and what you’ll need help creating.',
    fields: [
      { id: 'copyOwner', label: 'Who is providing the written copy?', type: 'radio', required: true, options: ['We will provide it', 'We need copywriting help', 'A mix of both'] },
      { id: 'mediaOwner', label: 'Who is providing images and video?', type: 'radio', required: true, options: ['We will provide it', 'We need stock assets', 'We need custom photography or video', 'A mix of both'] },
      { id: 'brandAssets', label: 'Do you have a logo and brand guidelines?', type: 'radio', required: true, options: ['Yes, complete and ready to share', 'Yes, but only partial', 'No, we need branding created'] },
      { id: 'brandConstraints', label: 'Any existing fonts or colors that must be used?', type: 'textarea', required: false },
      { id: 'contentDeadline', label: 'When can you have your content ready to hand over?', type: 'date', required: false }
    ]
  },
  {
    id: 'design',
    title: 'Design and branding',
    desc: 'Help us understand the look and feel you’re after.',
    fields: [
      { id: 'sitesLike', label: 'Three sites you love (style, not necessarily industry)', type: 'textarea', required: false, placeholder: 'One per line' },
      { id: 'sitesDislike', label: 'Three sites you’d rather we avoid the feel of', type: 'textarea', required: false, placeholder: 'One per line' },
      { id: 'tone', label: 'Preferred tone', type: 'checkbox', required: true, options: ['Minimal', 'Bold', 'Corporate', 'Playful', 'Luxury', 'Technical'], other: true },
      { id: 'conceptCount', label: 'How many initial design directions would you like to see?', type: 'radio', required: true, options: ['1', '2', '3 or more'] },
      { id: 'revisionRounds', label: 'How many rounds of revisions do you expect to need?', type: 'text', required: false, placeholder: 'e.g. 2' }
    ]
  },
  {
    id: 'technical',
    title: 'Technical requirements',
    desc: 'The infrastructure and platform decisions behind the scenes.',
    fields: [
      { id: 'domainHosting', label: 'Do you already have a domain and hosting?', type: 'radio', required: true, options: ['Yes, both', 'We have a domain, need hosting', 'We need a domain, have hosting', 'We need both'] },
      { id: 'domainName', label: 'What is your domain name?', type: 'text', required: false, placeholder: 'e.g. yourcompany.com', showIf: { field: 'domainHosting', notEquals: 'We need both' } },
      { id: 'techStack', label: 'Preferred platform', type: 'radio', required: true, options: ['WordPress', 'Webflow', 'Shopify', 'Custom code', 'Open to a recommendation'] },
      { id: 'trafficNotes', label: 'Expected traffic or scalability needs', type: 'textarea', required: false },
      { id: 'seoNeeds', label: 'SEO requirements', type: 'checkbox', required: false, options: ['Basic on-page SEO', 'Sitemap and schema markup', 'Migrating old URLs (redirects)', 'Advanced SEO strategy', 'Not needed'], other: true },
      { id: 'stagingNeeded', label: 'Do you need a staging environment to review before it goes live?', type: 'radio', required: false, options: ['Yes', 'No'] }
    ]
  },
  {
    id: 'timeline',
    title: 'Timeline and budget',
    desc: 'So we can plan a schedule that’s realistic for both sides.',
    fields: [
      { id: 'launchDate', label: 'Target launch date', type: 'date', required: false },
      { id: 'dateFlexible', label: 'Is that date fixed, or flexible?', type: 'radio', required: false, options: ['Fixed — tied to an event or campaign', 'Flexible'] },
      { id: 'budgetRange', label: 'Budget range', type: 'radio', required: true, options: ['Under $5,000', '$5,000 – $15,000', '$15,000 – $30,000', '$30,000+', 'I’d rather discuss this directly'] },
      { id: 'approvalProcess', label: 'Any internal approval steps we should know about?', type: 'textarea', required: false },
      { id: 'contactName', label: 'Main point of contact — name', type: 'text', required: true },
      { id: 'contactRole', label: 'Main point of contact — role', type: 'text', required: false }
    ]
  },
  {
    id: 'postlaunch',
    title: 'After launch',
    desc: 'What happens once the site is live.',
    fields: [
      { id: 'maintainer', label: 'Who will maintain the site after launch?', type: 'radio', required: true, options: ['You / your agency', 'Our internal team', 'Another agency', 'Not decided yet'] },
      { id: 'retainerInterest', label: 'Interested in an ongoing maintenance or support retainer?', type: 'radio', required: false, options: ['Yes', 'No', 'Maybe — tell me more'] },
      { id: 'accountOwner', label: 'Who should own the hosting and domain accounts?', type: 'radio', required: false, options: ['Client', 'Agency', 'Undecided'] },
      { id: 'trainingNeeded', label: 'Will you need training or documentation to use the CMS?', type: 'radio', required: false, options: ['Yes', 'No'] },
      { id: 'analyticsNeeds', label: 'Analytics and tracking needed', type: 'checkbox', required: false, options: ['Google Analytics / GA4', 'Heatmaps', 'Conversion tracking', 'Not sure yet'], other: true },
      { id: 'kpis', label: 'What KPIs will you track after launch?', type: 'textarea', required: false }
    ]
  }
];

export default function ProjectIntakePage() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem('craftovo_intake');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.state) setState(parsed.state);
        if (parsed.currentStep !== undefined) setCurrentStep(parsed.currentStep);
      } catch (e) {}
    }
  }, []);

  const saveState = (newState: any, step: number) => {
    localStorage.setItem('craftovo_intake', JSON.stringify({ state: newState, currentStep: step }));
  };

  const handleUpdate = (id: string, value: any) => {
    const newState = { ...state, [id]: value };
    setState(newState);
    setErrors({ ...errors, [id]: false });
    saveState(newState, currentStep);
  };

  const isVisible = (field: Field) => {
    if (!field.showIf) return true;
    const val = state[field.showIf.field];
    if (field.showIf.equals !== undefined) return val === field.showIf.equals;
    if (field.showIf.notEquals !== undefined) return val !== undefined && val !== '' && val !== field.showIf.notEquals;
    return true;
  };

  const validateStep = () => {
    if (currentStep >= STEPS.length) return true;
    const step = STEPS[currentStep];
    let valid = true;
    const newErrors = { ...errors };
    
    step.fields.forEach(field => {
      if (field.required && isVisible(field)) {
        const val = state[field.id];
        if (val === undefined || val === '' || (Array.isArray(val) && val.length === 0)) {
          newErrors[field.id] = true;
          valid = false;
        }
      }
    });
    
    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validateStep()) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      saveState(state, nextStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    const nextStep = currentStep - 1;
    setCurrentStep(nextStep);
    saveState(state, nextStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderField = (field: Field) => {
    if (!isVisible(field)) return null;
    const hasError = errors[field.id];
    
    const inputClass = `w-full p-4 bg-white/50 border ${hasError ? 'border-red-500/50 focus:border-red-500' : 'border-black/5 focus:border-black/40'} rounded-xl text-[#0B0B0E] focus:outline-none focus:bg-white/70 transition-all`;

    return (
      <div key={field.id} className="mb-8" id={field.id}>
        <label className="block mb-2 font-medium text-[#0B0B0E]/80 uppercase tracking-wider text-sm">
          {field.label} {field.required && <span className="text-blue-600">*</span>}
        </label>
        
        {(field.type === 'text' || field.type === 'date' || field.type === 'email') && (
          <input
            type={field.type}
            value={state[field.id] || ''}
            onChange={(e) => handleUpdate(field.id, e.target.value)}
            className={inputClass}
            placeholder={field.placeholder}
          />
        )}
        
        {field.type === 'textarea' && (
          <textarea
            value={state[field.id] || ''}
            onChange={(e) => handleUpdate(field.id, e.target.value)}
            className={`${inputClass} min-h-[120px] resize-y`}
            placeholder={field.placeholder}
          />
        )}
        
        {(field.type === 'radio' || field.type === 'checkbox') && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {field.options?.map(opt => {
              const isChecked = field.type === 'radio' ? state[field.id] === opt : (state[field.id] || []).includes(opt);
              return (
                <label key={opt} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${isChecked ? 'border-blue-600 bg-blue-50/50' : 'border-black/5 bg-white/50 hover:border-black/20'}`}>
                  <input
                    type={field.type}
                    checked={isChecked}
                    onChange={(e) => {
                      if (field.type === 'radio') {
                        handleUpdate(field.id, opt);
                      } else {
                        const curr = state[field.id] || [];
                        const next = e.target.checked ? [...curr, opt] : curr.filter((v: string) => v !== opt);
                        handleUpdate(field.id, next);
                      }
                    }}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-600"
                  />
                  <span className={`text-sm ${isChecked ? 'text-blue-900 font-medium' : 'text-[#0B0B0E]/80'}`}>{opt}</span>
                </label>
              );
            })}
            
            {field.other && (
              <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${(field.type === 'radio' ? state[field.id] === 'Other' : (state[field.id] || []).includes('Other')) ? 'border-blue-600 bg-blue-50/50' : 'border-black/5 bg-white/50 hover:border-black/20'}`}>
                <input
                  type={field.type}
                  checked={field.type === 'radio' ? state[field.id] === 'Other' : (state[field.id] || []).includes('Other')}
                  onChange={(e) => {
                    if (field.type === 'radio') {
                      handleUpdate(field.id, 'Other');
                    } else {
                      const curr = state[field.id] || [];
                      const next = e.target.checked ? [...curr, 'Other'] : curr.filter((v: string) => v !== 'Other');
                      handleUpdate(field.id, next);
                    }
                  }}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-600"
                />
                <span className={`text-sm ${(field.type === 'radio' ? state[field.id] === 'Other' : (state[field.id] || []).includes('Other')) ? 'text-blue-900 font-medium' : 'text-[#0B0B0E]/80'}`}>Other</span>
              </label>
            )}
          </div>
        )}
        
        {field.other && (field.type === 'radio' ? state[field.id] === 'Other' : (state[field.id] || []).includes('Other')) && (
          <input
            type="text"
            value={state[`${field.id}_otherText`] || ''}
            onChange={(e) => handleUpdate(`${field.id}_otherText`, e.target.value)}
            className={`${inputClass} mt-3`}
            placeholder="Please specify..."
          />
        )}
        
        {hasError && <p className="text-red-500 text-sm mt-2">This field is required.</p>}
      </div>
    );
  };

  const getDisplayValue = (field: Field) => {
    const val = state[field.id];
    if (val === undefined || val === '' || (Array.isArray(val) && val.length === 0)) return '—';
    if (Array.isArray(val)) {
      let items = [...val];
      if (items.includes('Other') && state[`${field.id}_otherText`]) {
        items = items.map(i => i === 'Other' ? `Other: ${state[`${field.id}_otherText`]}` : i);
      }
      return items.join(', ');
    }
    if (val === 'Other' && state[`${field.id}_otherText`]) {
      return `Other: ${state[`${field.id}_otherText`]}`;
    }
    return val;
  };

  const submitBrief = () => {
    let valid = true;
    const newErrors = { ...errors };
    if (!state.submitterName) { newErrors.submitterName = true; valid = false; }
    if (!state.submitterEmail || !/^\S+@\S+\.\S+$/.test(state.submitterEmail)) { newErrors.submitterEmail = true; valid = false; }
    setErrors(newErrors);
    
    if (valid) {
      setSubmitted(true);
      localStorage.removeItem('craftovo_intake');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F6]">
      {!started ? (
        <section className="flex-1 flex flex-col justify-center pt-32 pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/5 to-transparent pointer-events-none"></div>
          <div className="w-full max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 items-start relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6 text-blue-600 font-semibold tracking-widest uppercase text-sm">
                <span className="w-8 h-[2px] bg-blue-600"></span>
                Project intake
              </div>
              <h1 className="font-outfit text-5xl md:text-7xl font-semibold mb-8 text-[#0B0B0E] tracking-tight leading-[1.1]">
                Let's make something <br/><em className="text-blue-600 not-italic font-medium">worth remembering.</em>
              </h1>
              <p className="text-lg md:text-xl text-[#0B0B0E]/60 leading-relaxed max-w-2xl mb-10">
                Before we design a single pixel, we want to understand your business, your audience, your ambitions, and what success looks like. This short brief gives our team everything we need to start with intention.
              </p>
              <div className="flex items-center gap-6">
                <button onClick={() => setStarted(true)} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-blue-600/20 flex items-center gap-3">
                  Begin the brief <span>→</span>
                </button>
                <span className="text-[#0B0B0E]/50 text-sm font-medium">8 minutes · 8 sections</span>
              </div>
            </div>
            
            <div className="border-t md:border-t-0 md:border-l border-black/10 pt-8 md:pt-0 md:pl-12">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#0B0B0E]/50 mb-6">What's inside</h3>
              <div className="flex flex-col gap-4">
                {STEPS.map((step, idx) => (
                  <div key={step.id} className="flex items-center gap-4 text-[#0B0B0E]/80 pb-4 border-b border-black/5 last:border-0">
                    <span className="font-mono text-xs text-blue-600">{(idx + 1).toString().padStart(2, '0')}</span>
                    <span className="font-medium text-sm">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="flex-1 pt-32 pb-24">
          <div className="w-full max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 lg:gap-20 items-start relative z-10">
            
            {/* Sidebar */}
            <aside className="hidden md:block sticky top-32">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0B0B0E]/50 mb-6">Your brief</h3>
              <div className="flex flex-col">
                {STEPS.map((step, idx) => (
                  <button 
                    key={step.id} 
                    onClick={() => { if (!submitted) { setCurrentStep(idx); saveState(state, idx); } }}
                    className="flex items-start gap-4 pb-6 relative group text-left"
                  >
                    {idx < STEPS.length - 1 && (
                      <div className={`absolute left-[16px] top-[34px] bottom-[4px] w-[2px] ${idx < currentStep ? 'bg-blue-600' : 'bg-black/10'}`}></div>
                    )}
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-[10px] bg-white relative z-10 transition-colors ${idx === currentStep ? 'border-blue-600 bg-blue-600 text-white ring-4 ring-blue-600/20' : idx < currentStep ? 'border-blue-600 bg-blue-600 text-white' : 'border-black/20 text-[#0B0B0E]/50 group-hover:border-black/40'}`}>
                      {idx < currentStep ? '✓' : (idx + 1).toString().padStart(2, '0')}
                    </div>
                    <span className={`pt-1.5 text-sm transition-colors ${idx === currentStep ? 'font-bold text-[#0B0B0E]' : 'font-medium text-[#0B0B0E]/50 group-hover:text-[#0B0B0E]'}`}>
                      {step.title}
                    </span>
                  </button>
                ))}
                
                {/* Review Step Nav */}
                <button 
                  onClick={() => { if (!submitted) { setCurrentStep(STEPS.length); saveState(state, STEPS.length); } }}
                  className="flex items-start gap-4 relative group text-left"
                >
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-[10px] bg-white relative z-10 transition-colors ${currentStep === STEPS.length ? 'border-blue-600 bg-blue-600 text-white ring-4 ring-blue-600/20' : 'border-black/20 text-[#0B0B0E]/50 group-hover:border-black/40'}`}>
                    {(STEPS.length + 1).toString().padStart(2, '0')}
                  </div>
                  <span className={`pt-1.5 text-sm transition-colors ${currentStep === STEPS.length ? 'font-bold text-[#0B0B0E]' : 'font-medium text-[#0B0B0E]/50 group-hover:text-[#0B0B0E]'}`}>
                    Review & submit
                  </span>
                </button>
              </div>
            </aside>
            
            {/* Form Content */}
            <div className="glass-panel p-8 md:p-14 rounded-[2rem] border-black/5 bg-white relative overflow-hidden shadow-2xl shadow-black/5">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              
              <AnimatePresence mode="wait">
                {currentStep < STEPS.length && !submitted && (
                  <motion.div 
                    key={`step-${currentStep}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-8 right-8 md:top-12 md:right-12 text-[#0B0B0E]/5 font-serif text-6xl md:text-8xl leading-none">{String(currentStep + 1).padStart(2, '0')}</div>
                    
                    <div className="mb-10 relative z-10 pr-20">
                      <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-3">Section {String(currentStep + 1).padStart(2, '0')}</div>
                      <h2 className="font-outfit text-3xl md:text-4xl font-medium mb-3 text-[#0B0B0E]">{STEPS[currentStep].title}</h2>
                      <p className="text-[#0B0B0E]/60 text-sm md:text-base leading-relaxed max-w-lg">{STEPS[currentStep].desc}</p>
                    </div>
                    
                    <div className="relative z-10">
                      {STEPS[currentStep].fields.map(field => renderField(field))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-12 pt-8 border-t border-black/5 relative z-10">
                      <button 
                        onClick={handleBack} 
                        disabled={currentStep === 0}
                        className={`px-6 py-3 rounded-xl border border-black/10 font-semibold text-sm transition-colors ${currentStep === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#F4F4F6] text-[#0B0B0E]'}`}
                      >
                        Back
                      </button>
                      
                      <button 
                        onClick={handleNext}
                        className="bg-[#0B0B0E] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-black transition-colors shadow-lg shadow-black/10 flex items-center gap-2"
                      >
                        Continue <span>→</span>
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {currentStep === STEPS.length && !submitted && (
                  <motion.div
                    key="review"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-8 right-8 md:top-12 md:right-12 text-[#0B0B0E]/5 font-serif text-6xl md:text-8xl leading-none">{(STEPS.length + 1).toString().padStart(2, '0')}</div>
                    
                    <div className="mb-10 relative z-10 pr-20">
                      <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-3">Final step</div>
                      <h2 className="font-outfit text-3xl md:text-4xl font-medium mb-3 text-[#0B0B0E]">Review your brief</h2>
                      <p className="text-[#0B0B0E]/60 text-sm md:text-base leading-relaxed max-w-lg">Everything look right? Review your answers below before sending your project brief to Craftovo.</p>
                    </div>
                    
                    <div className="border border-black/10 rounded-2xl bg-[#F4F4F6]/50 overflow-hidden mb-12">
                      {STEPS.map((step) => {
                        const visibleFields = step.fields.filter(f => isVisible(f));
                        if (visibleFields.length === 0) return null;
                        
                        return (
                          <div key={step.id} className="p-6 md:p-8 border-b border-black/5 last:border-0">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-6">{step.title}</h4>
                            <div className="flex flex-col gap-4">
                              {visibleFields.map(field => {
                                const val = getDisplayValue(field);
                                return (
                                  <div key={field.id} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 text-sm">
                                    <div className="text-[#0B0B0E]/60">{field.label}</div>
                                    <div className={`font-medium ${val === '—' ? 'text-black/30' : 'text-[#0B0B0E]'}`}>{val}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="mb-10">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-[#0B0B0E]/80 mb-6">Your Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block mb-2 font-medium text-[#0B0B0E]/80 uppercase tracking-wider text-sm">Your Name <span className="text-blue-600">*</span></label>
                          <input 
                            type="text" 
                            value={state.submitterName || ''} 
                            onChange={e => handleUpdate('submitterName', e.target.value)} 
                            className={`w-full p-4 bg-white/50 border ${errors.submitterName ? 'border-red-500/50' : 'border-black/5'} rounded-xl focus:outline-none focus:border-black/40`} 
                            placeholder="Full name" 
                          />
                        </div>
                        <div>
                          <label className="block mb-2 font-medium text-[#0B0B0E]/80 uppercase tracking-wider text-sm">Your Email <span className="text-blue-600">*</span></label>
                          <input 
                            type="email" 
                            value={state.submitterEmail || ''} 
                            onChange={e => handleUpdate('submitterEmail', e.target.value)} 
                            className={`w-full p-4 bg-white/50 border ${errors.submitterEmail ? 'border-red-500/50' : 'border-black/5'} rounded-xl focus:outline-none focus:border-black/40`} 
                            placeholder="you@company.com" 
                          />
                          {errors.submitterEmail && <p className="text-red-500 text-xs mt-2">Valid email required</p>}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-12 pt-8 border-t border-black/5 relative z-10">
                      <button 
                        onClick={handleBack}
                        className="px-6 py-3 rounded-xl border border-black/10 font-semibold text-sm hover:bg-[#F4F4F6] text-[#0B0B0E] transition-colors"
                      >
                        Back
                      </button>
                      
                      <button 
                        onClick={submitBrief}
                        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2"
                      >
                        Submit brief <span>→</span>
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {submitted && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl shadow-xl shadow-blue-600/20 mx-auto mb-8">
                      ✓
                    </div>
                    <h2 className="font-outfit text-4xl md:text-5xl font-medium mb-4 text-[#0B0B0E]">Your brief is in.</h2>
                    <p className="text-[#0B0B0E]/60 text-lg leading-relaxed max-w-lg mx-auto mb-12">
                      Thanks for taking the time to tell us about your project. Our team will review your brief and follow up with you shortly.
                    </p>
                    <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 bg-[#0B0B0E] text-white hover:bg-black shadow-lg">
                      Return Home
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </section>
      )}
    </div>
  );
}
