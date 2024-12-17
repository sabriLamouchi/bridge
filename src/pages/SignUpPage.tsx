import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Github } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/mode-toggle"
import './signup.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  prefered_language: string;
  password: string;
}

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    prefered_language: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Replace with your API call
        console.log('Form submitted:', formData);
      } catch (error) {
        console.error('Signup error:', error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="signup-page">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>
      
      <div className="signup-container">
        {/* Left Side - Image */}
        <div className="signup-image-section">
          <div className="image-overlay">
            <h1>Welcome to Bridge</h1>
            <p>Connect with developers around the world</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="signup-form-section">
          <div className="form-container">
            <div className="form-header">
              <h2>Create Account</h2>
              <p>Start your journey with us today</p>
            </div>

            <Button variant="outline" className="w-full flex items-center justify-center gap-2 mb-6">
              <Github className="w-5 h-5" />
              <span>Sign up with Github</span>
            </Button>

            <div className="divider">
              <span>or continue with</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-field">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                </div>

                <div className="form-field">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-field">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-field">
                <Label htmlFor="prefered_language">Preferred Language</Label>
                <Input
                  id="prefered_language"
                  name="prefered_language"
                  type="text"
                  value={formData.prefered_language}
                  onChange={handleChange}
                  placeholder="English"
                />
              </div>

              <div className="form-field">
                <Label htmlFor="password">Password</Label>
                <div className="password-input-wrapper">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>

            <p className="text-center mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;