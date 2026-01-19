"use client";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
export default function AdminDashboard() {
  //   const navigate = useNavigate();
  const router = useRouter();
  const GoBack = () => {
    router.push("/");
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center g-4">
            {/* CMS Card */}
            <div className="col-12 col-md-4">
              <div
                className="card shadow h-100 text-center p-4 hover-card"
                onClick={() => router.push("/admin/pages")}
              >
                <div className="card-body">
                  <h2 className="card-title">CMS</h2>
                  <p className="card-text text-muted">
                    Manage pages, menus, and content
                  </p>
                </div>
              </div>
            </div>

            {/* Users Card */}
            <div className="col-12 col-md-4">
              <div
                className="card shadow h-100 text-center p-4 hover-card"
                onClick={() => router.push("/admin/users")}
              >
                <div className="card-body">
                  <h2 className="card-title">Users</h2>
                  <p className="card-text text-muted">
                    Manage users, roles, and permissions
                  </p>
                </div>
              </div>
            </div>

            {/* Security & Settings Card */}
            <div className="col-12 col-md-4">
              <div
                className="card shadow h-100 text-center p-4 hover-card"
                onClick={() => router.push("/admin/settings")}
              >
                <div className="card-body">
                  <h2 className="card-title">Security & Settings</h2>
                  <p className="card-text text-muted">
                    Configure security and system settings
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end gap-3 mt-5 me-4">
            <button className="btn btn-secondary" onClick={() => GoBack()}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
