let accountState = "pending";

if (accountState === "active") {
  console.log("Account is active.");
} else if (accountState === "pending") {
  console.log("Account is pending verification.");
} else if (accountState === "locked") {
    console.log("Account is locked")
}

//The name accountState suggests that this variable is intended to store the state or status of an account. It could be used for various purposes, such as:
//Active/Inactive: Representing whether an account is currently active or inactive (e.g., "active", "inactive", true, false).
//Locked/Unlocked: Indicating whether an account is locked due to too many failed login attempts (e.g., "locked", "unlocked").
