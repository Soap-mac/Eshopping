import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdLocalShipping,
  MdOutlineSecurity,
  MdOutlineAssignment,
  MdOutlineSupportAgent,
  MdOutlineRefresh,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdArrowForward,
  MdGavel,
  MdKeyboardArrowRight,
} from 'react-icons/md';

const supportCards = [
  {
    id: 'delivery',
    icon: MdLocalShipping,
    title: 'Delivery Information',
    description: 'Learn about delivery coverage, timing and order processing.',
  },
  {
    id: 'returns',
    icon: MdOutlineRefresh,
    title: 'Returns & Refunds',
    description: 'Understand return eligibility, cancellations and refund handling.',
  },
  {
    id: 'payment',
    icon: MdOutlineSecurity,
    title: 'Secure Payment',
    description: 'Learn how payments are processed and protected during checkout.',
  },
  {
    id: 'terms',
    icon: MdOutlineAssignment,
    title: 'Terms & Conditions',
    description: 'Review the rules and conditions for using our website.',
  },
  {
    id: 'legal',
    icon: MdGavel,
    title: 'Legal Notice',
    description: 'Important information about the website, products and legal matters.',
  },
  {
    id: 'contact',
    icon: MdOutlineSupportAgent,
    title: 'Contact Support',
    description: 'Need help? Get in touch with our support team.',
  },
];

const sectionData = {
  delivery: {
    eyebrow: 'DELIVERY INFORMATION',
    title: 'Delivery Information',
    icon: MdLocalShipping,
    intro:
      'We aim to deliver your orders safely and on time. Here is everything you need to know about our delivery process, coverage and timelines.',
    points: [
      {
        number: '01',
        title: 'Processing Time',
        text:
          'Orders are processed after successful order confirmation and payment verification. You will receive a confirmation once your order is confirmed.',
      },
      {
        number: '02',
        title: 'Delivery Timeline',
        text:
          'Delivery time varies based on your location and product availability. Estimated delivery information will be shared with your order.',
      },
      {
        number: '03',
        title: 'Delivery Charges',
        text:
          'Shipping charges may vary depending on your location, order value and product category. Any applicable charges will be shown before checkout.',
      },
      {
        number: '04',
        title: 'Tracking Your Order',
        text:
          'Once your order is dispatched, you can track it using the tracking details provided through your order information or registered contact details.',
      },
      {
        number: '05',
        title: 'Important Notes',
        text:
          'Please provide accurate contact and delivery details. Delays caused by incorrect information may not be the responsibility of the store.',
      },
    ],
  },

  returns: {
    eyebrow: 'RETURNS & REFUNDS',
    title: 'Returns & Refunds',
    icon: MdOutlineRefresh,
    intro:
      'We want you to have a smooth shopping experience. Read the information below before requesting a return, cancellation or refund.',
    points: [
      {
        number: '01',
        title: 'Return Eligibility',
        text:
          'Return eligibility depends on the product category and condition of the item received.',
      },
      {
        number: '02',
        title: 'Product Condition',
        text:
          'Products should be returned in acceptable condition and may need to include original packaging, accessories and included items.',
      },
      {
        number: '03',
        title: 'Refund Processing',
        text:
          'Where applicable, refunds are processed after the return or cancellation has been reviewed and approved.',
      },
      {
        number: '04',
        title: 'Damaged or Incorrect Items',
        text:
          'If you receive a damaged, incorrect or missing item, contact support as soon as possible with your order details.',
      },
      {
        number: '05',
        title: 'Order Cancellation',
        text:
          'Cancellation availability depends on the current order status and whether the order has already been processed or dispatched.',
      },
    ],
  },

  payment: {
    eyebrow: 'SECURE PAYMENT',
    title: 'Secure Payment',
    icon: MdOutlineSecurity,
    intro:
      'Your payment should be completed only through the official checkout process provided by the website.',
    points: [
      {
        number: '01',
        title: 'Secure Checkout',
        text:
          'Payments are processed through the payment gateway integrated with the website.',
      },
      {
        number: '02',
        title: 'Payment Information',
        text:
          'Never share OTPs, passwords, card credentials or other authentication information with anyone.',
      },
      {
        number: '03',
        title: 'Payment Confirmation',
        text:
          'An order should be considered successfully paid only after the payment status is confirmed by the website.',
      },
      {
        number: '04',
        title: 'Payment Failure',
        text:
          'If a payment fails, you may retry through the official checkout process after confirming your cart and order details.',
      },
      {
        number: '05',
        title: 'Amount Deducted',
        text:
          'If money is deducted but your order is not confirmed, contact support with the relevant payment and order information.',
      },
    ],
  },

  terms: {
    eyebrow: 'TERMS & CONDITIONS',
    title: 'Terms & Conditions',
    icon: MdOutlineAssignment,
    intro:
      'By using this website, you agree to use the platform responsibly and follow the terms described below.',
    points: [
      {
        number: '01',
        title: 'Website Usage',
        text:
          'Customers agree to use the website lawfully and provide accurate information when creating accounts or placing orders.',
      },
      {
        number: '02',
        title: 'Product Information',
        text:
          'Product availability, descriptions, pricing and promotions may change without prior notice.',
      },
      {
        number: '03',
        title: 'Order Acceptance',
        text:
          'Orders may be cancelled when products are unavailable, payment cannot be verified or incorrect information has been provided.',
      },
      {
        number: '04',
        title: 'Customer Responsibility',
        text:
          'Customers are responsible for reviewing product, address, contact and order details before completing checkout.',
      },
      {
        number: '05',
        title: 'Policy Updates',
        text:
          'Store policies and terms may be updated from time to time to reflect operational or legal changes.',
      },
    ],
  },

  legal: {
    eyebrow: 'LEGAL NOTICE',
    title: 'Legal Notice',
    icon: MdGavel,
    intro:
      'This section provides general information about the website, its content and the responsibilities of its users.',
    points: [
      {
        number: '01',
        title: 'Website Ownership',
        text:
          'This website and its interface, branding and original content are intended for use by the store and its customers.',
      },
      {
        number: '02',
        title: 'Content Accuracy',
        text:
          'Reasonable efforts are made to keep product and website information accurate, but occasional errors may occur.',
      },
      {
        number: '03',
        title: 'Product Availability',
        text:
          'Product availability may change based on stock levels and operational conditions.',
      },
      {
        number: '04',
        title: 'Intellectual Property',
        text:
          'Website text, images, branding and other original content should not be reproduced or redistributed without appropriate permission.',
      },
      {
        number: '05',
        title: 'Legal Questions',
        text:
          'For questions involving legal or business matters, customers should contact the store directly.',
      },
    ],
  },

  contact: {
    eyebrow: 'CONTACT SUPPORT',
    title: 'Contact Support',
    icon: MdOutlineSupportAgent,
    intro:
      'Need help with an order, payment or another issue? Contact the store using the information below.',
    points: [],
  },
};

function Help() {
  const [activeSection, setActiveSection] = useState('delivery');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');

    if (sectionData[hash]) {
      setActiveSection(hash);

      setTimeout(() => {
        document.getElementById('help-content')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);

    window.history.replaceState(
      null,
      '',
      `/Help#${section}`
    );

    setTimeout(() => {
      document.getElementById('help-content')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  };

  const activeData = sectionData[activeSection];
  const ActiveIcon = activeData.icon;

  return (
    <div className="!min-h-screen !w-full !overflow-x-hidden !bg-[#070707] !text-white">
      <div className="!mx-auto !w-full !max-w-[1500px] !px-5 sm:!px-8 lg:!px-10 xl:!px-12 !py-8 sm:!py-12 lg:!py-16">

        <section className="relative !overflow-hidden !rounded-[28px] !border !border-white/[0.08] !bg-[#0d0f12] !px-6 sm:!px-10 lg:!px-14 !py-10 sm:!py-14 lg:!py-16 !mb-7">

          <div className="pointer-events-none !absolute -top-[120px] -right-[80px] !h-[300px] !w-[300px] !rounded-full !bg-orange-500/[0.07] !blur-3xl"></div>

          <div className="pointer-events-none !absolute -bottom-[180px] left-[35%] !h-[300px] !w-[300px] !rounded-full !bg-orange-500/[0.025] !blur-3xl"></div>

          <div className="relative !z-10 !max-w-[720px]">
            <div className="!mb-4 !flex !items-center !gap-3">
              <span className="!block !h-[2px] !w-8 !bg-orange-400"></span>

              <p className="!m-0 !text-[11px] sm:!text-[12px] !font-semibold !tracking-[3px] !text-orange-400">
                SUPPORT CENTER
              </p>
            </div>

            <h1 className="!m-0 !text-[36px] sm:!text-[46px] lg:!text-[56px] !font-semibold !leading-[1.05] !tracking-[-1.5px] !text-white">
              Help <span className="!text-orange-400">&</span> Information
            </h1>

            <p className="!m-0 !mt-5 !max-w-[620px] !text-[14px] sm:!text-[16px] !leading-7 !text-[#969ba3]">
              Find answers to your questions about delivery,
              payments, returns, terms and how to contact us.
            </p>
          </div>
        </section>

        <section className="!mb-7 !grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-4 lg:!gap-5">
          {supportCards.map((card) => {
            const Icon = card.icon;
            const active = activeSection === card.id;

            return (
              <button
                key={card.id}
                type="button"
                onClick={() => handleSectionChange(card.id)}
                className={`group !flex !min-h-[175px] !w-full !flex-col !justify-between !rounded-2xl !border !p-5 sm:!p-6 !text-left !transition-all !duration-300 ${active
                    ? '!border-orange-400/40 !bg-orange-400/[0.07]'
                    : '!border-white/[0.08] !bg-[#0d0f12] hover:!border-orange-400/30 hover:!bg-orange-400/[0.035]'
                  }`}
              >
                <div className="!flex !items-start !justify-between">
                  <div className={`!flex !h-11 !w-11 !items-center !justify-center !rounded-full !transition-all !duration-300 ${active
                      ? '!bg-orange-400/[0.15]'
                      : '!bg-white/[0.05] group-hover:!bg-orange-400/[0.10]'
                    }`}>
                    <Icon className="!text-[23px] !text-orange-400" />
                  </div>

                  <span className={`!flex !h-8 !w-8 !items-center !justify-center !rounded-full !transition-all !duration-300 ${active
                      ? '!bg-orange-400 !text-black'
                      : '!bg-white/[0.05] !text-[#8f959e] group-hover:!bg-orange-400 group-hover:!text-black'
                    }`}>
                    <MdArrowForward className="!text-[17px]" />
                  </span>
                </div>

                <div className="!mt-6">
                  <h2 className="!m-0 !text-[16px] sm:!text-[17px] !font-semibold !leading-6 !text-white">
                    {card.title}
                  </h2>

                  <p className="!m-0 !mt-2 !max-w-[360px] !text-[12px] !leading-5 !text-[#8f959e]">
                    {card.description}
                  </p>
                </div>
              </button>
            );
          })}
        </section>

        <section
          id="help-content"
          className="!scroll-mt-20 !overflow-hidden !rounded-[24px] !border !border-white/[0.08] !bg-[#0b0d10]"
        >
          <div className="!grid !min-w-0 !grid-cols-1 lg:!grid-cols-[260px_minmax(0,1fr)]">

            <aside className="!border-b !border-white/[0.08] lg:!border-b-0 lg:!border-r !border-white/[0.08] !p-4 sm:!p-5 lg:!p-6">
              <div className="!mb-4 !flex !items-center !gap-2 !px-2">
                <span className="!h-[2px] !w-5 !bg-orange-400"></span>

                <p className="!m-0 !text-[14px] !font-semibold !text-white">
                  Quick Links
                </p>
              </div>

              <nav className="!grid !grid-cols-2 sm:!grid-cols-3 lg:!grid-cols-1 !gap-1.5">
                {supportCards.map((item) => {
                  const Icon = item.icon;
                  const active = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSectionChange(item.id)}
                      className={`!flex !min-w-0 !w-full !items-center !gap-3 !rounded-xl !border !px-3 !py-3 !text-left !transition-all !duration-300 ${active
                          ? '!border-orange-400/20 !bg-orange-400/[0.10] !text-orange-400'
                          : '!border-transparent !text-[#9399a2] hover:!border-white/[0.05] hover:!bg-white/[0.04] hover:!text-white'
                        }`}
                    >
                      <Icon className="!shrink-0 !text-[18px]" />

                      <span className="!min-w-0 !flex-1 !text-[12px] sm:!text-[13px] !leading-5">
                        {item.title}
                      </span>

                      <MdKeyboardArrowRight className="!hidden !shrink-0 !text-[17px] sm:!block" />
                    </button>
                  );
                })}
              </nav>
            </aside>

            <main className="!min-w-0 !p-6 sm:!p-8 lg:!p-10">

              <div className="!flex !min-w-0 !flex-col sm:!flex-row !items-start !gap-5 !border-b !border-white/[0.08] !pb-7">
                <div className="!flex !h-14 !w-14 !shrink-0 !items-center !justify-center !rounded-full !border !border-orange-400/10 !bg-orange-400/[0.10]">
                  <ActiveIcon className="!text-[30px] !text-orange-400" />
                </div>

                <div className="!min-w-0">
                  <p className="!m-0 !text-[10px] sm:!text-[11px] !font-semibold !tracking-[2px] !text-orange-400">
                    {activeData.eyebrow}
                  </p>

                  <h2 className="!m-0 !mt-2 !text-[26px] sm:!text-[32px] !font-semibold !tracking-[-0.5px] !text-white">
                    {activeData.title}
                  </h2>

                  <p className="!m-0 !mt-2 !max-w-[800px] !text-[13px] sm:!text-[14px] !leading-6 !text-[#8f959e]">
                    {activeData.intro}
                  </p>
                </div>
              </div>

              {activeSection === 'contact' ? (
                <div className="!pt-8">
                  <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-4">

                    <div className="!rounded-2xl !border !border-white/[0.08] !bg-white/[0.025] !p-5">
                      <div className="!mb-3 !flex !items-center !gap-3">
                        <MdEmail className="!text-[22px] !text-orange-400" />

                        <p className="!m-0 !text-[14px] !font-semibold !text-white">
                          Email
                        </p>
                      </div>

                      <p className="!m-0 !break-all !text-[13px] !text-[#9197a0]">
                        arpit@gmail.com
                      </p>
                    </div>

                    <div className="!rounded-2xl !border !border-white/[0.08] !bg-white/[0.025] !p-5">
                      <div className="!mb-3 !flex !items-center !gap-3">
                        <MdPhone className="!text-[22px] !text-orange-400" />

                        <p className="!m-0 !text-[14px] !font-semibold !text-white">
                          Phone
                        </p>
                      </div>

                      <p className="!m-0 !text-[13px] !text-[#9197a0]">
                        (+91) 1234567890
                      </p>
                    </div>

                    <div className="!rounded-2xl !border !border-white/[0.08] !bg-white/[0.025] !p-5 sm:!col-span-2">
                      <div className="!mb-3 !flex !items-center !gap-3">
                        <MdLocationOn className="!text-[22px] !text-orange-400" />

                        <p className="!m-0 !text-[14px] !font-semibold !text-white">
                          Address
                        </p>
                      </div>

                      <p className="!m-0 !text-[13px] !leading-6 !text-[#9197a0]">
                        Bhadrichak, Flat Dhanbad, Jharkhand, India
                      </p>
                    </div>
                  </div>

                  <div className="!mt-5 !rounded-2xl !border !border-orange-400/20 !bg-orange-400/[0.06] !p-5 sm:!p-6">
                    <div className="!flex !flex-col !gap-5 sm:!flex-row sm:!items-center sm:!justify-between">
                      <div className="!min-w-0">
                        <p className="!m-0 !text-[11px] !font-semibold !uppercase !tracking-[1.5px] !text-orange-400">
                          Need Help?
                        </p>

                        <h3 className="!m-0 !mt-1 !text-[18px] !font-semibold !text-white">
                          We're here to help.
                        </h3>

                        <p className="!m-0 !mt-1 !text-[13px] !leading-6 !text-[#959ba4]">
                          Get in touch with us for questions about your order.
                        </p>
                      </div>

                      <a
                        href="mailto:arpit@gmail.com"
                        className="!inline-flex !w-fit !shrink-0 !items-center !justify-center !gap-2 !rounded-full !bg-orange-400 !px-5 !py-3 !text-[13px] !font-semibold !text-black !transition-colors hover:!bg-orange-500"
                      >
                        Contact Us
                        <MdArrowForward className="!text-[18px]" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="!grid !min-w-0 !grid-cols-1 md:!grid-cols-2 !gap-x-8 !gap-y-8 !pt-8">
                  {activeData.points.map((point) => (
                    <div
                      key={point.number}
                      className={`!flex !min-w-0 !items-start !gap-4 ${point.number === '05'
                          ? 'md:!col-span-2'
                          : ''
                        }`}
                    >
                      <div className="!flex !h-10 !w-10 !shrink-0 !items-center !justify-center !rounded-full !bg-orange-400/[0.10]">
                        <span className="!text-[11px] !font-semibold !text-orange-400">
                          {point.number}
                        </span>
                      </div>

                      <div className="!min-w-0">
                        <h3 className="!m-0 !text-[14px] sm:!text-[15px] !font-semibold !text-white">
                          {point.title}
                        </h3>

                        <p className="!m-0 !mt-1 !text-[12px] sm:!text-[13px] !leading-6 !text-[#8f959e]">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="!flex !justify-end !pt-8">
                <button
                  type="button"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }
                  className="!m-0 !border-0 !bg-transparent !p-0 !text-[12px] !text-[#8f959e] !transition-colors hover:!text-orange-400"
                >
                  Back to top
                </button>
              </div>

            </main>
          </div>
        </section>

        <div className="!flex !justify-center !pt-8 sm:!pt-10">
          <Link
            to="/"
            className="!inline-flex !items-center !gap-2 !text-[13px] !text-[#9a9fa7] !transition-colors hover:!text-orange-400"
          >
            Return to Home
            <MdArrowForward className="!text-[17px]" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Help;