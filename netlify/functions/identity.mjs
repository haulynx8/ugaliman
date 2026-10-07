// Only invited users may use the gallery editor, so reject every public sign-up.
// Accepting an invite doesn't go through validation, so invites still work.
export default {
  userValidate(event) {
    return event.deny()
  },
}
