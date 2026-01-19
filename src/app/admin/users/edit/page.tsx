"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ConfirmSaveModal from "../../components/ConfirmSaveModal";
interface User {
  userId: number;
  fullName: string;
  email: string;
  isActive: boolean;
  createdOn: string;
  lastLoginOn: string | null;
  roles: number[];
}
interface Role {
  roleId: number;
  roleName: string;
}

export default function EditUserPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [user, setUser] = useState<User | null>(null);
  const [saving, setSaving] = useState(false);
  const [allRoles, setAllRoles] = useState<Role[]>([]);
  const [userError, setUserError] = useState("");
  const [rolesError, setRolesError] = useState("");
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingRoles, setLoadingRoles] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  // Fetch user
  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    const loadUser = async () => {
      try {
        setLoadingUser(true);
        setUserError("");

        const response = await axios.get<User>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${id}`,
          {
            signal: controller.signal,
            withCredentials: true,
          }
        );

        setUser({
          ...response.data,
          roles: response.data.roles ?? [],
        });
      } catch (err: unknown) {
        if (axios.isCancel(err)) return;

        if (axios.isAxiosError(err)) {
          setUserError(
            err.response?.status === 404
              ? "User not found"
              : "Failed to load user"
          );
        } else {
          setUserError("Unexpected error occurred");
        }
      } finally {
        setLoadingUser(false);
      }
    };

    loadUser();
    return () => controller.abort();
  }, [id]);
  useEffect(() => {
    const controller = new AbortController();

    async function loadRoles() {
      try {
        setLoadingRoles(true);
        setRolesError("");
        const res = await axios.get<Role[]>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/roles`,
          {
            withCredentials: true,
            signal: controller.signal,
          }
        );
        setAllRoles(res.data);
      } catch {
        setRolesError("Failed to load roles");
      } finally {
        setLoadingRoles(false);
      }
    }

    loadRoles();
    return () => controller.abort();
  }, []);

  // Input change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!user) return;

    const { name, value } = e.target;

    setUser((prev) => (prev ? { ...prev, [name]: value } : prev));
  }

  const handleSaveClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  // Submit
  const handleSubmit = async () => {
    setShowConfirm(false);
    if (!user || !id) return;

    setSaving(true);
    setUserError("");

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${id}`,
        user,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert(response.data.message || "User updated successfully");
        // router.push("/admin/users");
      } else {
        // Unexpected non-error status code, handle generically
        setUserError("Unexpected response from server");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setUserError(err.response?.data?.message || "Update failed");
      } else {
        setUserError("Unexpected error occurred");
      }
    } finally {
      setSaving(false);
    }
  };
  const GoBack = () => {
    router.push("/admin/users");
  };

  if (loadingUser) return <p>Loading...</p>;
  if (loadingRoles) return <p>Loading Roles...</p>;
  if (userError) return <p className="text-danger">{userError}</p>;
  // if (rolesError) return <p className="text-danger">{rolesError}</p>;
  if (!user) return <p>User not found</p>;

  return (
    <section className="maincontent">
      <div className="container mt-4" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4">Edit User</h2>

        <form onSubmit={handleSaveClick}>
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              name="fullName"
              className="form-control"
              value={user.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold d-block">Roles</label>

            <div className="ms-3 d-flex flex-wrap gap-3">
              {allRoles.map((role) => (
                <div className="form-check mb-1" key={role.roleId}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`role-${role.roleId}`}
                    checked={user.roles.includes(role.roleId)} // check by ID
                    onChange={(e) => {
                      if (!user) return;

                      const updatedRoles = e.target.checked
                        ? [...user.roles, role.roleId] // add roleId
                        : user.roles.filter((id) => id !== role.roleId); // remove roleId

                      setUser({ ...user, roles: updatedRoles });
                    }}
                  />
                  <label
                    htmlFor={`role-${role.roleId}`}
                    className="form-check-label"
                  >
                    {role.roleName}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="form-label fw-bold ">isActive</label>
            <div className="form-check mb-3 ms-3">
              <input
                type="checkbox"
                className="form-check-input"
                checked={user.isActive}
                onChange={(e) =>
                  setUser({ ...user, isActive: e.target.checked })
                }
              />
              <label className="form-check-label">Active</label>
            </div>
          </div>
          <div className="d-flex justify-content-end gap-3">
            <button className="btn btn-secondary" onClick={() => GoBack()}>
              Back
            </button>
            <button className="btn btn-primary" disabled={saving}>
              Save
            </button>
          </div>
        </form>

        <ConfirmSaveModal
          show={showConfirm}
          onConfirm={handleSubmit}
          onCancel={() => setShowConfirm(false)}
        />
      </div>
    </section>
  );
}
