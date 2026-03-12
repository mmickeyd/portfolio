import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const LIMITS = { name: 100, email: 254, message: 2000 };

const stripHtml = (value: string) =>
    value.replace(/<[^>]*>/g, '').replace(/[<>]/g, '');

const sanitize = (value: string, field: keyof typeof LIMITS) =>
    stripHtml(value).slice(0, LIMITS[field]);

const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<
        'idle' | 'sending' | 'success' | 'error'
    >('idle');
    const [validationError, setValidationError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: sanitize(value, name as keyof typeof LIMITS),
        });
        setValidationError('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        if (!isValidEmail(formData.email)) {
            setValidationError('Please enter a valid email address.');
            return;
        }
        if (formData.name.trim().length < 2) {
            setValidationError('Name must be at least 2 characters.');
            return;
        }
        if (formData.message.trim().length < 10) {
            setValidationError('Message must be at least 10 characters.');
            return;
        }

        setStatus('sending');

        emailjs
            .sendForm(
                'service_w3vxtch',
                'service_w3vxtch',
                form.current,
                'D_vkMJq7scTDJk9TE',
            )
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setStatus('error');
            });
    };

    return (
        <div className='contactPage'>
            <h1 className='pageHeader'>CONTACT</h1>
            <div className='pageSubtitle'>
                Have a project in mind or just want to connect? Drop me a
                message.
            </div>

            <div className='contactCard'>
                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className='contactForm'
                >
                    <div className='formRow'>
                        <div className='formGroup'>
                            <label className='formLabel'>
                                NAME
                                <span className='charCount'>
                                    {formData.name.length}/{LIMITS.name}
                                </span>
                            </label>
                            <input
                                className='formInput'
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your name'
                                maxLength={LIMITS.name}
                                required
                            />
                        </div>
                        <div className='formGroup'>
                            <label className='formLabel'>EMAIL</label>
                            <input
                                className='formInput'
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='your@email.com'
                                maxLength={LIMITS.email}
                                required
                            />
                        </div>
                    </div>

                    <div className='formGroup'>
                        <label className='formLabel'>
                            MESSAGE
                            <span className='charCount'>
                                {formData.message.length}/{LIMITS.message}
                            </span>
                        </label>
                        <textarea
                            className='formInput formTextarea'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="What's on your mind?"
                            rows={6}
                            maxLength={LIMITS.message}
                            required
                        />
                    </div>

                    {validationError && (
                        <p className='statusMessage error'>{validationError}</p>
                    )}

                    <button
                        className={`submitButton ${status}`}
                        type='submit'
                        disabled={status === 'sending'}
                    >
                        {status === 'sending'
                            ? 'SENDING...'
                            : status === 'success'
                              ? 'MESSAGE SENT ✓'
                              : status === 'error'
                                ? 'TRY AGAIN'
                                : 'SEND MESSAGE'}
                    </button>

                    {status === 'error' && (
                        <p className='statusMessage error'>
                            Something went wrong. Please try again or reach out
                            directly.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};
