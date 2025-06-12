import React from "react";

// PUBLIC_INTERFACE
function ProfileIcon({ username = "SS" }) {
  /**
   * ProfileIcon displays a circular avatar with user's initials or a default symbol.
   */
  return (
    <span
      className="profile-icon"
      style={{
        width: 36,
        height: 36,
        background: "var(--accent-color)",
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: 18,
        color: "var(--accent-contrast)",
        userSelect: "none",
      }}
      title="Your profile"
    >
      {username}
    </span>
  );
}

export default ProfileIcon;
