import { useState } from "react";
import "../Styles/Settings.css";

import {
    LuUser,
    LuSettings,
    LuBell,
    LuPalette,
    LuShield,
    LuLogOut,
    LuCamera,
    LuSave,
    LuChevronRight,
    LuTrash2
} from "react-icons/lu";

export default function Settings() {

    const [activeSection, setActiveSection] = useState("profile");

    const [notifications, setNotifications] = useState({
        email: true,
        business: true,
        marketing: false
    });

    const sections = [
        {
            id: "profile",
            label: "Profile",
            description: "Your personal information",
            icon: LuUser
        },
        {
            id: "account",
            label: "Account",
            description: "Account details and security",
            icon: LuSettings
        },
        {
            id: "notifications",
            label: "Notifications",
            description: "Manage your notifications",
            icon: LuBell
        },
        {
            id: "appearance",
            label: "Appearance",
            description: "Customize your NEXA experience",
            icon: LuPalette
        }
    ];

    const toggleNotification = (type) => {
        setNotifications(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    return (
        <div className="settings-page page">

            <div className="settings-header">
                <div>
                    <span className="settings-eyebrow">
                        Account
                    </span>

                    <h1>Settings</h1>

                    <p>
                        Manage your account and customize your NEXA experience.
                    </p>
                </div>
            </div>

            <div className="settings-layout">

                {/* SIDEBAR */}

                <aside className="settings-sidebar">

                    <div className="settings-nav">

                        {sections.map((section) => {

                            const Icon = section.icon;

                            return (
                                <button
                                    key={section.id}
                                    className={`settings-nav-item ${
                                        activeSection === section.id
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setActiveSection(section.id)
                                    }
                                >

                                    <div className="settings-nav-icon">
                                        <Icon size={18} />
                                    </div>

                                    <div className="settings-nav-text">
                                        <strong>{section.label}</strong>

                                        <span>
                                            {section.description}
                                        </span>
                                    </div>

                                    <LuChevronRight
                                        className="settings-nav-arrow"
                                        size={16}
                                    />

                                </button>
                            );
                        })}

                    </div>

                    <div className="settings-sidebar-footer">

                        <div className="settings-help-icon">
                            <LuShield size={18} />
                        </div>

                        <div>
                            <strong>Your privacy matters</strong>

                            <p>
                                Your information is protected by NEXA.
                            </p>
                        </div>

                    </div>

                </aside>


                {/* CONTENT */}

                <main className="settings-content">

                    {/* PROFILE */}

                    {activeSection === "profile" && (
                        <section className="settings-section">

                            <div className="section-heading">
                                <div>
                                    <h2>Profile information</h2>

                                    <p>
                                        Update the information people see
                                        about you.
                                    </p>
                                </div>

                                <button className="save-button">
                                    <LuSave size={17} />
                                    Save changes
                                </button>
                            </div>


                            <div className="settings-card">

                                <div className="avatar-row">

                                    <div className="avatar">
                                        D

                                        <button className="avatar-edit">
                                            <LuCamera size={14} />
                                        </button>
                                    </div>

                                    <div className="avatar-info">

                                        <h3>Profile photo</h3>

                                        <p>
                                            JPG, PNG or WebP. Maximum
                                            recommended size is 2MB.
                                        </p>

                                        <button className="secondary-button">
                                            Change photo
                                        </button>

                                    </div>

                                </div>


                                <div className="form-grid">

                                    <div className="form-field">

                                        <label>First name</label>

                                        <input
                                            type="text"
                                            placeholder="First name"
                                            defaultValue="Destyn"
                                        />

                                    </div>

                                    <div className="form-field">

                                        <label>Last name</label>

                                        <input
                                            type="text"
                                            placeholder="Last name"
                                        />

                                    </div>

                                    <div className="form-field full">

                                        <label>Username</label>

                                        <div className="input-prefix">
                                            <span>@</span>

                                            <input
                                                type="text"
                                                defaultValue="destyn"
                                            />
                                        </div>

                                    </div>

                                    <div className="form-field full">

                                        <label>Bio</label>

                                        <textarea
                                            placeholder="Tell people a little about yourself..."
                                            rows="4"
                                        />

                                    </div>

                                </div>

                            </div>

                        </section>
                    )}


                    {/* ACCOUNT */}

                    {activeSection === "account" && (
                        <section className="settings-section">

                            <div className="section-heading">

                                <div>
                                    <h2>Account</h2>

                                    <p>
                                        Manage your login and account
                                        information.
                                    </p>
                                </div>

                            </div>


                            <div className="settings-card">

                                <div className="account-row">

                                    <div>
                                        <span className="field-label">
                                            Email address
                                        </span>

                                        <strong>
                                            destyn@example.com
                                        </strong>

                                        <p>
                                            This email is used to sign into
                                            your NEXA account.
                                        </p>
                                    </div>

                                    <button className="secondary-button">
                                        Change email
                                    </button>

                                </div>


                                <div className="divider" />


                                <div className="account-row">

                                    <div>
                                        <span className="field-label">
                                            Password
                                        </span>

                                        <strong>
                                            ••••••••••••
                                        </strong>

                                        <p>
                                            Keep your account secure with a
                                            strong password.
                                        </p>
                                    </div>

                                    <button className="secondary-button">
                                        Change password
                                    </button>

                                </div>

                            </div>


                            <div className="danger-card">

                                <div className="danger-icon">
                                    <LuTrash2 size={20} />
                                </div>

                                <div className="danger-content">

                                    <h3>Delete account</h3>

                                    <p>
                                        Permanently delete your NEXA account
                                        and all associated data.
                                    </p>

                                </div>

                                <button className="danger-button">
                                    Delete account
                                </button>

                            </div>

                        </section>
                    )}


                    {/* NOTIFICATIONS */}

                    {activeSection === "notifications" && (
                        <section className="settings-section">

                            <div className="section-heading">

                                <div>
                                    <h2>Notifications</h2>

                                    <p>
                                        Choose how NEXA keeps you updated.
                                    </p>
                                </div>

                            </div>


                            <div className="settings-card">

                                <NotificationRow
                                    title="Email notifications"
                                    description="Receive important updates and account notifications."
                                    enabled={notifications.email}
                                    onToggle={() =>
                                        toggleNotification("email")
                                    }
                                />

                                <div className="divider" />

                                <NotificationRow
                                    title="Business activity"
                                    description="Get notified about activity on your NEXA businesses."
                                    enabled={notifications.business}
                                    onToggle={() =>
                                        toggleNotification("business")
                                    }
                                />

                                <div className="divider" />

                                <NotificationRow
                                    title="Marketing emails"
                                    description="Receive news, product updates and occasional offers."
                                    enabled={notifications.marketing}
                                    onToggle={() =>
                                        toggleNotification("marketing")
                                    }
                                />

                            </div>

                        </section>
                    )}


                    {/* APPEARANCE */}

                    {activeSection === "appearance" && (
                        <section className="settings-section">

                            <div className="section-heading">

                                <div>
                                    <h2>Appearance</h2>

                                    <p>
                                        Customize how NEXA looks for you.
                                    </p>
                                </div>

                            </div>


                            <div className="settings-card">

                                <div className="appearance-heading">
                                    <h3>Theme</h3>

                                    <p>
                                        Choose your preferred interface theme.
                                    </p>
                                </div>


                                <div className="theme-options">

                                    <button className="theme-option active">

                                        <div className="theme-preview light-preview">
                                            <div />
                                            <div />
                                            <div />
                                        </div>

                                        <span>Light</span>

                                    </button>


                                    <button className="theme-option">

                                        <div className="theme-preview dark-preview">
                                            <div />
                                            <div />
                                            <div />
                                        </div>

                                        <span>Dark</span>

                                    </button>

                                </div>

                            </div>

                        </section>
                    )}

                </main>

            </div>

        </div>
    );
}


function NotificationRow({
    title,
    description,
    enabled,
    onToggle
}) {

    return (
        <div className="notification-row">

            <div>
                <h3>{title}</h3>

                <p>{description}</p>
            </div>

            <button
                className={`toggle ${enabled ? "enabled" : ""}`}
                onClick={onToggle}
                aria-label={`Toggle ${title}`}
            >
                <span />
            </button>

        </div>
    );
}