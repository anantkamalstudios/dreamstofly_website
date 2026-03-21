import React, { useState, useContext } from "react";
import { ArrowRight, Star, X, ChevronDown, Eye, EyeOff, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";

/* ─── Already Logged In Dialog ───────────────────────────────── */
const AlreadyLoggedInDialog = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">
      <div className="flex items-start justify-between px-8 pt-8 pb-2">
        <div />
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="px-8 pb-8 flex flex-col items-center text-center gap-4">
        <AlertCircle className="w-14 h-14 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">You're already logged in</h3>
        <p className="text-sm text-gray-500">
          Please logout from your current account first, then you can register as a property owner.
        </p>
        <button
          onClick={onClose}
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3 rounded-xl transition-colors w-full"
        >
          OK, Got it
        </button>
      </div>
    </div>
  </div>
);

/* ─── Property Owner Registration Dialog ─────────────────────── */
const PropertyOwnerDialog = ({ onClose, onSuccess }) => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "" });
  const [phoneCode, setPhoneCode] = useState("+91");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const countryCodes = ["+91", "+1", "+971", "+61", "+49", "+33", "+81", "+86", "+7"];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.mobile || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/users/property_owner_api`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            mobile: phoneCode + form.mobile,
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
        <div className="flex items-start justify-between px-8 pt-8 pb-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Post a Free Ad</h2>
            <p className="text-sm text-gray-400 mt-1">
              Create your property owner account to get started
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition mt-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {success ? (
          <div className="px-8 py-12 flex flex-col items-center text-center gap-4">
            <CheckCircle className="w-14 h-14 text-green-500" />
            <h3 className="text-xl font-bold text-gray-900">You're all set!</h3>
            <p className="text-sm text-gray-500">
              Your property owner account has been created. You can now post your
              free ad and start finding tenants.
            </p>
            <button
              onClick={onSuccess}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="px-8 pt-5 pb-8 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="eg: John Doe"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="eg: john@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Mobile Number</label>
              <div className="flex gap-2">
                <div className="relative flex-shrink-0">
                  <select value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)}
                    className="appearance-none pl-3 pr-7 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
                    {countryCodes.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
                <input type="tel" name="mobile" value={form.mobile} onChange={handleChange}
                  placeholder="8889088888"
                  className="flex-1 min-w-0 px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password"
                  value={form.password} onChange={handleChange} placeholder="Create a password"
                  className="w-full px-4 py-3 pr-11 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" />
                <button type="button" onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            {error && (
              <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">{error}</p>
            )}
            <div className="flex justify-end pt-1">
              <button onClick={handleSubmit} disabled={loading}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm">
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" />Submitting...</>
                ) : (
                  <>Post a Free Ad
                    <span className="bg-white bg-opacity-20 rounded-lg p-1 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Main Component ─────────────────────────────────────────── */
const AccommodationOverview = () => {
  const navigate = useNavigate();
  const [showPropertyDialog, setShowPropertyDialog] = useState(false);
  const [showLoggedInWarning, setShowLoggedInWarning] = useState(false);
  const { user } = useContext(AuthContext);

  const handlePostAdClick = () => {
    const token = localStorage.getItem("token");
    let isStudent = false;

    if (user) {
      const actualUser = user.user || user;
      if (
        String(actualUser.role) === "2" ||
        String(actualUser.role_id) === "2" ||
        actualUser.role === "student" ||
        String(actualUser.user_type) === "2"
      ) {
        isStudent = true;
      }
    }

    if (token) {
      if (isStudent) {
        // Logged in as a student — show warning to logout
        setShowLoggedInWarning(true);
      } else {
        // Logged in as an owner (or unknown) — go straight to ad creation
        navigate("/accomodation/got-a-room");
      }
    } else {
      // Not logged in — show registration form
      setShowPropertyDialog(true);
    }
  };

  const stats = [
    { value: "1.5 M+", label: "Beds" },
    { value: "10 K+", label: "Properties" },
    { value: "700+", label: "Cities" },
  ];

  return (
    <div className="w-full py-8 md:py-12 bg-gray-100">
      <div className="w-full mx-auto px-4 md:px-16">

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">

          {/* Card 1 - Need a room */}
          <div className="bg-blue-100 p-6 md:p-8 rounded-sm flex items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Need a room?</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Post a free Room Wanted ad and make sure people with rooms can find you.
              </p>
            </div>
            <button
              onClick={() => navigate("/accomodation/accommodation-service")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 text-sm whitespace-nowrap flex-shrink-0"
            >
              Advertise for free
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2 - Got a room */}
          <div className="bg-white p-6 md:p-8 rounded-sm flex items-center justify-between gap-4 border border-gray-200">
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Got a room to let?</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Post a free ad and rent your room in days.
              </p>
            </div>
            <button
              onClick={handlePostAdClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 text-sm whitespace-nowrap flex-shrink-0"
            >
              Post a free ad
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-gray-700">{stat.label}</div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block w-px h-12 md:h-16 bg-blue-400" />
              )}
            </React.Fragment>
          ))}

          <div className="hidden sm:block w-px h-12 md:h-16 bg-blue-400" />

          <div className="flex items-center gap-3">
            <div className="text-center">
              <p className="text-xs text-gray-600 font-medium">Rated</p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 leading-none">4.8</p>
              <p className="text-xs text-gray-600 font-medium">out of 5</p>
            </div>
            <div className="flex flex-col justify-center">
              <svg className="h-7 md:h-9 mb-1" viewBox="0 0 92 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold">
                  <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan>
                  <tspan fill="#FBBC04">o</tspan><tspan fill="#4285F4">g</tspan>
                  <tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
                </text>
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-sm text-gray-700 font-medium">Reviews</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Already logged in warning */}
      {showLoggedInWarning && (
        <AlreadyLoggedInDialog onClose={() => setShowLoggedInWarning(false)} />
      )}

      {/* Registration dialog */}
      {showPropertyDialog && (
        <PropertyOwnerDialog
          onClose={() => setShowPropertyDialog(false)}
          onSuccess={() => {
            setShowPropertyDialog(false);
            navigate("/login");
          }}
        />
      )}
    </div>
  );
};

export default AccommodationOverview;