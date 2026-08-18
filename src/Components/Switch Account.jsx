import { useNavigate } from "react-router-dom";
import {
    LuArrowLeft,
    LuArrowRight,
    LuCheck,
    LuPlus,
    LuUser
} from "react-icons/lu";
import "../Styles/Accounts.css";

export default function SwitchAccount() {
    const navigate = useNavigate();

    // Temporary mock accounts
    const accounts = [
        {
            id: 1,
            name: "Felie's Cafe",
            email: "felies@example.com",
            initial: "F",
            active: true
        },
        {
            id: 2,
            name: "Nexa Studios",
            email: "nexastudios@example.com",
            initial: "N",
            active: false
        }
    ];

    const handleSwitch = (account) => {
        console.log("Switching to:", account);
        // Supabase account switching will go here later
    };

    return (
        <main className="switch-account-page page">

            <div className="switch-account-container">

                <button
                    type="button"
                    className="switch-back"
                    onClick={() => navigate(-1)}
                >
                    <LuArrowLeft />
                    <span>Back</span>
                </button>

                <div className="switch-account-header">
                    <div className="switch-icon">
                        <LuUser />
                    </div>

                    <h1>Switch account</h1>

                    <p>
                        Choose an account to continue with NEXA.
                    </p>
                </div>


                <div className="accounts-list">

                    {accounts.map((account) => (
                        <button
                            type="button"
                            key={account.id}
                            className={`account-option ${
                                account.active ? "active" : ""
                            }`}
                            onClick={() => handleSwitch(account)}
                        >

                            <div className="account-avatar">
                                {account.initial}
                            </div>

                            <div className="account-info">
                                <h3>{account.name}</h3>
                                <span>{account.email}</span>

                                {account.active && (
                                    <small>Current account</small>
                                )}
                            </div>

                            <div className="account-action">
                                {account.active ? (
                                    <LuCheck />
                                ) : (
                                    <LuArrowRight />
                                )}
                            </div>

                        </button>
                    ))}

                </div>


                <button
                    type="button"
                    className="add-account"
                >
                    <span className="add-account-icon">
                        <LuPlus />
                    </span>

                    <span>
                        <strong>Add existing account</strong>
                        <small>
                            Sign in with another NEXA account
                        </small>
                    </span>

                    <LuArrowRight />
                </button>

            </div>

        </main>
    );
}