import React from 'react';
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
} from 'react-icons/md';

function Help() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <div className="container !px-6 sm:!px-10 lg:!px-16 !py-10 sm:!py-14 lg:!py-20">

        <div className="max-w-4xl mx-auto text-center !mb-12 sm:!mb-16">
          <p className="text-orange-400 uppercase tracking-[3px] text-[12px] sm:text-[13px] font-semibold !mb-3">
            Support Center
          </p>

          <h1 className="text-white text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight">
            Help & Information
          </h1>

          <p className="text-[#a49a9a] text-[14px] sm:text-[16px] leading-7 !mt-4 max-w-2xl mx-auto">
            Find information about delivery, payments, returns,
            terms, and how to contact us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 !mb-14 sm:!mb-20">
          <a
            href="#delivery"
            className="group border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 hover:border-orange-400/50 hover:bg-orange-400/[0.05] transition-all duration-300"
          >
            <MdLocalShipping className="text-orange-400 text-[36px] !mb-4 group-hover:scale-105 transition-transform" />
            <h2 className="text-[18px] font-semibold text-white">
              Delivery Information
            </h2>
            <p className="text-[#a49a9a] text-[13px] leading-6 !mt-2">
              Learn about delivery coverage, timing, and order
              processing.
            </p>
          </a>

          <a
            href="#payment"
            className="group border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 hover:border-orange-400/50 hover:bg-orange-400/[0.05] transition-all duration-300"
          >
            <MdOutlineSecurity className="text-orange-400 text-[36px] !mb-4 group-hover:scale-105 transition-transform" />
            <h2 className="text-[18px] font-semibold text-white">
              Secure Payment
            </h2>
            <p className="text-[#a49a9a] text-[13px] leading-6 !mt-2">
              Learn how payments are processed and protected
              during checkout.
            </p>
          </a>

          <a
            href="#returns"
            className="group border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 hover:border-orange-400/50 hover:bg-orange-400/[0.05] transition-all duration-300"
          >
            <MdOutlineRefresh className="text-orange-400 text-[36px] !mb-4 group-hover:scale-105 transition-transform" />
            <h2 className="text-[18px] font-semibold text-white">
              Returns & Refunds
            </h2>
            <p className="text-[#a49a9a] text-[13px] leading-6 !mt-2">
              Understand return eligibility, cancellations, and
              refund handling.
            </p>
          </a>

          <a
            href="#terms"
            className="group border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 hover:border-orange-400/50 hover:bg-orange-400/[0.05] transition-all duration-300"
          >
            <MdOutlineAssignment className="text-orange-400 text-[36px] !mb-4 group-hover:scale-105 transition-transform" />
            <h2 className="text-[18px] font-semibold text-white">
              Terms & Conditions
            </h2>
            <p className="text-[#a49a9a] text-[13px] leading-6 !mt-2">
              Review the rules and conditions that apply when
              using our store.
            </p>
          </a>

          <a
            href="#legal"
            className="group border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 hover:border-orange-400/50 hover:bg-orange-400/[0.05] transition-all duration-300"
          >
            <MdOutlineAssignment className="text-orange-400 text-[36px] !mb-4 group-hover:scale-105 transition-transform" />
            <h2 className="text-[18px] font-semibold text-white">
              Legal Notice
            </h2>
            <p className="text-[#a49a9a] text-[13px] leading-6 !mt-2">
              Important information about the website, products,
              and legal responsibilities.
            </p>
          </a>

          <a
            href="#contact"
            className="group border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 hover:border-orange-400/50 hover:bg-orange-400/[0.05] transition-all duration-300"
          >
            <MdOutlineSupportAgent className="text-orange-400 text-[36px] !mb-4 group-hover:scale-105 transition-transform" />
            <h2 className="text-[18px] font-semibold text-white">
              Contact Support
            </h2>
            <p className="text-[#a49a9a] text-[13px] leading-6 !mt-2">
              Need help with an order? Get in touch with our
              support team.
            </p>
          </a>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">

          <section
            id="delivery"
            className="scroll-mt-24 border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 sm:!p-8"
          >
            <div className="flex items-center gap-3 !mb-5">
              <MdLocalShipping className="text-orange-400 text-[30px]" />
              <h2 className="text-white text-[24px] sm:text-[28px] font-semibold">
                Delivery Information
              </h2>
            </div>

            <div className="space-y-4 text-[#b8b0b0] text-[14px] sm:text-[15px] leading-7">
              <p>
                Orders are processed after successful order
                confirmation and payment verification.
              </p>

              <p>
                Delivery availability, estimated delivery
                time, and applicable charges may vary depending
                on the customer's location and the order.
              </p>

              <p>
                Customers should provide accurate contact and
                delivery details when placing an order. Delays
                caused by incorrect information may not be the
                responsibility of the store.
              </p>

              <p>
                Once an order has been dispatched, customers
                may contact support for updates regarding the
                shipment.
              </p>
            </div>
          </section>

          <section
            id="payment"
            className="scroll-mt-24 border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 sm:!p-8"
          >
            <div className="flex items-center gap-3 !mb-5">
              <MdOutlineSecurity className="text-orange-400 text-[30px]" />
              <h2 className="text-white text-[24px] sm:text-[28px] font-semibold">
                Secure Payment
              </h2>
            </div>

            <div className="space-y-4 text-[#b8b0b0] text-[14px] sm:text-[15px] leading-7">
              <p>
                Payments are processed through the payment
                gateway integrated into the website.
              </p>

              <p>
                Payment information should only be entered on
                the official checkout page. Customers should
                never share OTPs, passwords, or other
                authentication information with anyone.
              </p>

              <p>
                An order should be considered successfully
                paid only after the payment status is
                confirmed by the website.
              </p>

              <p>
                If money is deducted but the order is not
                confirmed, please contact support with the
                relevant order details.
              </p>
            </div>
          </section>

          <section
            id="returns"
            className="scroll-mt-24 border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 sm:!p-8"
          >
            <div className="flex items-center gap-3 !mb-5">
              <MdOutlineRefresh className="text-orange-400 text-[30px]" />
              <h2 className="text-white text-[24px] sm:text-[28px] font-semibold">
                Returns & Refunds
              </h2>
            </div>

            <div className="space-y-4 text-[#b8b0b0] text-[14px] sm:text-[15px] leading-7">
              <p>
                Return eligibility depends on the type and
                condition of the product.
              </p>

              <p>
                Products must be returned in an acceptable
                condition and may need to include their
                original packaging, accessories, and other
                included items.
              </p>

              <p>
                Refunds, where applicable, are processed after
                the return or cancellation has been reviewed
                and approved.
              </p>

              <p>
                For damaged, incorrect, or missing items,
                contact support as soon as possible with your
                order information.
              </p>
            </div>
          </section>

          <section
            id="terms"
            className="scroll-mt-24 border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 sm:!p-8"
          >
            <div className="flex items-center gap-3 !mb-5">
              <MdOutlineAssignment className="text-orange-400 text-[30px]" />
              <h2 className="text-white text-[24px] sm:text-[28px] font-semibold">
                Terms & Conditions
              </h2>
            </div>

            <div className="space-y-4 text-[#b8b0b0] text-[14px] sm:text-[15px] leading-7">
              <p>
                By using this website, customers agree to use
                the platform lawfully and provide accurate
                information when creating accounts or placing
                orders.
              </p>

              <p>
                Product availability, pricing, promotions,
                and other store information may change without
                prior notice.
              </p>

              <p>
                Orders may be cancelled when products are
                unavailable, payment cannot be verified, or
                incorrect information has been provided.
              </p>

              <p>
                Customers are responsible for reviewing their
                order details before completing checkout.
              </p>
            </div>
          </section>

          <section
            id="legal"
            className="scroll-mt-24 border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 sm:!p-8"
          >
            <div className="flex items-center gap-3 !mb-5">
              <MdOutlineAssignment className="text-orange-400 text-[30px]" />
              <h2 className="text-white text-[24px] sm:text-[28px] font-semibold">
                Legal Notice
              </h2>
            </div>

            <div className="space-y-4 text-[#b8b0b0] text-[14px] sm:text-[15px] leading-7">
              <p>
                This website is operated for online shopping
                and related customer services.
              </p>

              <p>
                Website content, including text, images,
                branding, product information, and interface
                elements, should not be reproduced or
                redistributed without appropriate permission.
              </p>

              <p>
                While reasonable efforts are made to keep
                website information accurate, errors in
                product information, availability, or pricing
                may occasionally occur.
              </p>

              <p>
                For questions about legal or business matters,
                customers should contact the store directly.
              </p>
            </div>
          </section>

          <section
            id="contact"
            className="scroll-mt-24 border border-white/[0.10] bg-white/[0.03] rounded-2xl !p-6 sm:!p-8"
          >
            <div className="flex items-center gap-3 !mb-5">
              <MdOutlineSupportAgent className="text-orange-400 text-[30px]" />
              <h2 className="text-white text-[24px] sm:text-[28px] font-semibold">
                Contact Support
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 !mt-6">
              <div className="flex items-start gap-4">
                <MdEmail className="text-orange-400 text-[25px] mt-1" />
                <div>
                  <p className="text-white font-medium">
                    Email
                  </p>
                  <p className="text-[#a49a9a] text-[14px] !mt-1">
                    arpit@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdPhone className="text-orange-400 text-[25px] mt-1" />
                <div>
                  <p className="text-white font-medium">
                    Phone
                  </p>
                  <p className="text-[#a49a9a] text-[14px] !mt-1">
                    (+91) 1234567890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:col-span-2">
                <MdLocationOn className="text-orange-400 text-[25px] mt-1" />
                <div>
                  <p className="text-white font-medium">
                    Address
                  </p>
                  <p className="text-[#a49a9a] text-[14px] !mt-1">
                    Bhadrichak, Flat Dhanbad, Jharkhand, India
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>

        <div className="text-center !mt-12 sm:!mt-16">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-white font-medium !px-6 !py-3 rounded-full transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Help;