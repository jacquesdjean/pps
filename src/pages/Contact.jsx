import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Section, SectionHeader, Card } from '../components/common';
import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';
import { company } from '../theme/constants';

const Contact = () => {
  const { isMobile, isDesktop } = useWindowSize();
  const { colors, gradients } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // For now, we'll just log the data
    // TODO: Integrate with EmailJS or backend API
    console.log('Form submitted:', data);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    fontSize: 15,
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    background: colors.background,
    color: colors.textPrimary,
    fontFamily: 'Outfit, sans-serif',
  };

  const labelStyle = {
    display: 'block',
    fontSize: 14,
    fontWeight: 600,
    color: colors.textPrimary,
    marginBottom: 6,
  };

  const errorStyle = {
    fontSize: 13,
    color: colors.error,
    marginTop: 4,
  };

  return (
    <div>
      <Section bgVariant="alt">
        <SectionHeader
          label="GET IN TOUCH"
          title="Request a Free Quote"
          subtitle="Tell us about your project and we'll provide a custom solution for your energy and water needs."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '2fr 1fr' : '1fr',
            gap: 32,
            marginTop: 40,
          }}
        >
          {/* Contact Form */}
          <Card style={{ padding: isMobile ? 24 : 32 }}>
            {submitted ? (
              <div
                style={{
                  background: colors.successLight,
                  border: `1px solid ${colors.success}`,
                  borderRadius: 8,
                  padding: 20,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>✓</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: colors.success, marginBottom: 8 }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: 15, color: colors.textSecondary }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: 'grid', gap: 20 }}>
                  {/* Name */}
                  <div>
                    <label htmlFor="name" style={labelStyle}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      style={inputStyle}
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      style={inputStyle}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" style={labelStyle}>
                      Phone *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      style={inputStyle}
                      {...register('phone', { required: 'Phone is required' })}
                    />
                    {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" style={labelStyle}>
                      I'm interested in *
                    </label>
                    <select
                      id="serviceType"
                      style={inputStyle}
                      {...register('serviceType', { required: 'Please select a service' })}
                    >
                      <option value="">Select a service...</option>
                      <option value="residential-battery">Residential Battery Backup</option>
                      <option value="residential-solar">Residential Solar + Battery</option>
                      <option value="commercial-energy">Commercial Energy Storage</option>
                      <option value="water-systems">Water Generation Systems</option>
                      <option value="smart-panel">SPAN Smart Panel</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                    {errors.serviceType && <p style={errorStyle}>{errors.serviceType.message}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" style={labelStyle}>
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      placeholder="Tell us about your project, location, timeline, etc."
                      {...register('message')}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '16px 28px',
                      fontSize: 16,
                      fontWeight: 600,
                      background: gradients.primary,
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: 10,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1,
                      transition: 'all 0.2s',
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p style={{ fontSize: 13, color: colors.textLight, textAlign: 'center' }}>
                    By submitting this form, you agree to be contacted about your project.
                  </p>
                </div>
              </form>
            )}
          </Card>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Card style={{ padding: isMobile ? 20 : 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary, marginBottom: 16 }}>
                Contact Information
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <div style={{ fontSize: 13, color: colors.textLight, marginBottom: 4 }}>Phone</div>
                  <a
                    href={`tel:${company.phoneRaw}`}
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: colors.orange,
                      textDecoration: 'none',
                    }}
                  >
                    {company.phone}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: colors.textLight, marginBottom: 4 }}>Email</div>
                  <a
                    href={`mailto:${company.email}`}
                    style={{
                      fontSize: 15,
                      color: colors.electricBlue,
                      textDecoration: 'none',
                    }}
                  >
                    {company.email}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: colors.textLight, marginBottom: 4 }}>Service Area</div>
                  <div style={{ fontSize: 15, color: colors.textPrimary, fontWeight: 500 }}>
                    {company.serviceArea}
                  </div>
                </div>
              </div>
            </Card>

            <Card style={{ padding: isMobile ? 20 : 24, background: colors.backgroundAccent }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>
                Response Time
              </h3>
              <p style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 1.6 }}>
                We typically respond to quote requests within 24 hours. For urgent inquiries, please call us directly.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
