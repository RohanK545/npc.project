"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
interface User {
  userId: number;
  fullName: string;
  email: string;
  isActive: boolean;
  createdOn: string;
  lastLoginOn: string | null;
  roles: [];
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" />
      </div>
    );
  }
  const GoBack = () => {
    router.push("/admin/dashboard");
  };

  return (
    <section className="maincontent ">
      <div className="container mt-5">
        <h1 className="mb-4">Users</h1>

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Created On</th>
                <th>Last Login</th>
                <th>Roles</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-muted">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr key={user.userId}>
                    <td>{index + 1}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>
                      <span
                        className={`badge ${
                          user.isActive ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td>{new Date(user.createdOn).toLocaleDateString()}</td>
                    <td>
                      {user.lastLoginOn
                        ? new Date(user.lastLoginOn).toLocaleString()
                        : "—"}
                    </td>
                    <td>
                      {user.roles.length > 0 ? user.roles.join(", ") : "—"}
                    </td>
                    <td
                      onClick={
                        () => router.push(`/admin/users/edit?id=${user.userId}`) //?id=${user.userId}
                      }
                      className="d-flex justify-content-center align-items-center cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          router.push(`/admin/users/edit?id=${user.userId}`);
                        }
                      }}
                      title="Edit User"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0  30 30"
                      >
                        <path d="M12.965,5.462c0,-0 -2.584,0.004 -4.979,0.008c-3.034,0.006 -5.49,2.467 -5.49,5.5l0,13.03c0,1.459 0.579,2.858 1.611,3.889c1.031,1.032 2.43,1.611 3.889,1.611l13.003,0c3.038,-0 5.5,-2.462 5.5,-5.5c0,-2.405 0,-5.004 0,-5.004c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.827,-0 -1.5,0.672 -1.5,1.5l0,5.004c0,1.381 -1.119,2.5 -2.5,2.5l-13.003,0c-0.663,-0 -1.299,-0.263 -1.768,-0.732c-0.469,-0.469 -0.732,-1.105 -0.732,-1.768l0,-13.03c0,-1.379 1.117,-2.497 2.496,-2.5c2.394,-0.004 4.979,-0.008 4.979,-0.008c0.828,-0.002 1.498,-0.675 1.497,-1.503c-0.001,-0.828 -0.675,-1.499 -1.503,-1.497Z" />
                        <path d="M20.046,6.411l-6.845,6.846c-0.137,0.137 -0.232,0.311 -0.271,0.501l-1.081,5.152c-0.069,0.329 0.032,0.671 0.268,0.909c0.237,0.239 0.577,0.343 0.907,0.277l5.194,-1.038c0.193,-0.039 0.371,-0.134 0.511,-0.274l6.845,-6.845l-5.528,-5.528Zm1.415,-1.414l5.527,5.528l1.112,-1.111c1.526,-1.527 1.526,-4.001 -0,-5.527c-0.001,-0 -0.001,-0.001 -0.001,-0.001c-1.527,-1.526 -4.001,-1.526 -5.527,-0l-1.111,1.111Z" />
                      </svg>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="d-flex justify-content-end gap-3 me-4">
            <button className="btn btn-secondary" onClick={() => GoBack()}>
              Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
