import React from 'react';
import ProfileForm from '../ProfileForm';
import ProfileHeader from '../ProfileHeader';

function Profile() {
  return (
    <div className="container profile" style={{ marginTop: '40px' }}>
      <ProfileHeader />
      <div className="row">
        <div className="col-12" style={{ borderRadius: '5px' }}>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

export default Profile;
