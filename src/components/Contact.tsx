import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  theme: 'light' | 'dark';
}

const Contact = ({ theme }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out to me through any of the channels below.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-8">
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50'
            }`}>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600/20">
                    <MapPin className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Location</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    123 Developer Street<br />
                    São Paulo - Brasil
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50'
            }`}>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600/20">
                    <Mail className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    hello@jefferson.com<br />
                    contact@jefferson.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50'
            }`}>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600/20">
                    <Phone className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Phone</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <form 
              onSubmit={handleSubmit}
              className={`p-8 rounded-lg ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-white shadow-lg'
              }`}
            >
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500' 
                        : theme === 'dark' 
                          ? 'border-slate-600 bg-slate-700 text-white' 
                          : 'border-gray-300 bg-white text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block mb-2 text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500' 
                        : theme === 'dark' 
                          ? 'border-slate-600 bg-slate-700 text-white' 
                          : 'border-gray-300 bg-white text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="subject" 
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'dark' 
                      ? 'border-slate-600 bg-slate-700 text-white' 
                      : 'border-gray-300 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message 
                      ? 'border-red-500' 
                      : theme === 'dark' 
                        ? 'border-slate-600 bg-slate-700 text-white' 
                        : 'border-gray-300 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;