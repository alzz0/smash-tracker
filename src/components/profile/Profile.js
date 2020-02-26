import React from "react";
import { connect } from "react-redux";
function Profile({ profile }) {
  return (
    <div>
      <h3>
        Name: {profile.firstName} {profile.lastName}
      </h3>
      <h4>Points: ...</h4>
    </div>
  );
}

const mapStateToProps = state => ({
  profile: state.firebase.profile
});
export default connect(mapStateToProps)(Profile);
