import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full text-center">
      <div className="mb-8">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
      </div>

      {/* Error Message */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-font-primary mb-4">
          Oops! Page not found
        </h2>
        <p className="text-lg text-font-secondary">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className="space-y-4">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-brand text-white font-medium rounded-lg transition-colors"
        >
          Go Home
        </Link>

        <div>
          <button
            onClick={() => window.history.back()}
            className="text-font-secondary hover:text-font-primary transition-colors"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
);
