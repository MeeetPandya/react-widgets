import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';


export default function Login() {
  const [user, setUser] = useState(null);

  // Replace with your actual Google Client ID
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      setUser(decoded);
      console.log('User Info:', decoded);
      
      // Send token to your backend for verification
      // fetch('/api/auth/google', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ token: credentialResponse.credential })
      // });
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  const handleError = () => {
    console.error('Login Failed');
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              OAuth 2.0 Demo
            </h1>
            <p className="text-gray-600">Sign in with Google</p>
          </div>

          {!user ? (
            <div className="flex flex-col items-center space-y-4">
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                useOneTap
                theme="filled_blue"
                size="large"
                text="signin_with"
                shape="rectangular"
              />
              
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-16 h-16 rounded-full border-2 border-indigo-500"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {user.name}
                  </h2>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <h3 className="font-semibold text-gray-700 mb-2">User Info:</h3>
                <div className="text-sm space-y-1">
                  <p><span className="font-medium">Name:</span> {user.name}</p>
                  <p><span className="font-medium">Email:</span> {user.email}</p>
                  <p><span className="font-medium">Email Verified:</span> {user.email_verified ? 'Yes' : 'No'}</p>
                  <p><span className="font-medium">Sub:</span> {user.sub}</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
