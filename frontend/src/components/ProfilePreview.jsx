import React from 'react';
import '../styles/vars.css';
import '../styles/ProfileView.css'; 
import '../styles/HomePageDesign.css'; 
import Header from './Header';

const ProfilePreview = ({ location }) => {
  const userData = location.state.userData; 

  if (!userData) {
    return <p>User data not found!</p>; 
  }

  const { info, experiences, education, certifications, skills, projects } = userData; 

  return (
    <div className="profile-preview-page">
      <Header user={userData} noEditButton={true} />
      <div className="body">
        <div className="body2">
          <div className="body-wrapper">
            <div className="center-wrapper">
              <div className="profile">
                <div className="header2">
                  <div className="profile-area">
                    <div className="avatar">
                      <div
                        className="image-component"
                        style={{
                          background: `url(${userData.avatarUrl || 'http://localhost:8000/ProfileView/image-component0.png'}) center`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <img
                          className="profile-photo"
                          src={userData.profilePhoto || 'http://localhost:8000/ProfileView/profile-photo0.png'}
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="info">
                      <div className="name">
                        <div className="ilker-ozturk">{info.name || 'User Name'}</div>
                      </div>
                      <div className="title">
                        <div className="full-stack-web-app-developer">
                          {info.title || ''}
                        </div>
                      </div>
                      <div className="address">
                        <div className="markham-on-canada">{info.location || ''}</div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="private-button">
                    <div className="text-content">
                      <div className="text">Edit</div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="banner"></div>

              {experiences.length > 0 && (
                <div className="education-title">
                  <div className="education">Experiences</div>
                </div>
              )}
              {experiences.map((experience) => (
                <div className="experience-grid-1" key={experience.title}>
                  <div className="info2">
                    <div className="default-logo">
                      <div className="logo2">
                        <img className="vector-02" src="http://localhost:8000/ProfileView/vector-01.svg" alt="Logo" />
                        <div className="depth-8-frame-0"></div>
                      </div>
                    </div>
                    <div className="info3">
                      <div className="header3">
                        <div className="senior-product-designer">{experience.title}</div>
                      </div>
                      <div className="sub">
                        <div className="_2019-present-3-years">{experience.dates}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {education.length > 0 && (
                <div className="education-title">
                  <div className="education">Education</div>
                </div>
              )}
              {education.map((edu) => (
                <div className="education-grid-1" key={edu.institution}>
                  <div className="info2">
                    <div className="default-school-logo">
                      <div className="logo2">
                        <img className="vector-04" src="http://localhost:8000/ProfileView/vector-03.svg" alt="Logo" />
                        <div className="depth-8-frame-02"></div>
                      </div>
                    </div>
                    <div className="info3">
                      <div className="header3">
                        <div className="humber-college">{edu.institution}</div>
                      </div>
                      <div className="sub3">
                        <div className="_2024-present">{edu.dates}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {certifications.length > 0 && (
                <div className="education-title">
                  <div className="education">Certifications</div>
                </div>
              )}
              {certifications.map((cert) => (
                <div className="certification-grid-1" key={cert.title}>
                  <div className="info2">
                    <div className="default-certification-logo">
                      <div className="logo2">
                        <img className="vector-05" src="http://localhost:8000/ProfileView/vector-04.svg" alt="Logo" />
                        <div className="depth-8-frame-03"></div>
                      </div>
                    </div>
                    <div className="info3">
                      <div className="header5">
                        <div className="postman-student-expert">{cert.title}</div>
                      </div>
                      <div className="sub4">
                        <div className="october-2017">{cert.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {skills.length > 0 && (
                <div className="skills-title">
                  <div className="skills">Skills</div>
                </div>
              )}
              <div className="skills-list">
                {skills.map((skill) => (
                  <div className="list-1" key={skill}>
                    <div className="text3">
                      <div className="user-research">{skill}</div>
                    </div>
                  </div>
                ))}
                <div className="list-32">
                  <div className="text3">
                    <div className="product-design">+ 3 more...</div>
                  </div>
                </div>
              </div>

              {projects.length > 0 && (
                <div className="education-title">
                  <div className="education">Projects</div>
                </div>
              )}
              {projects.map((project) => (
                <div className="experience-grid-1" key={project.title}>
                  <div className="info2">
                    <div className="default-logo">
                      <div className="logo2">
                        <img className="vector-02" src="http://localhost:8000/ProfileView/vector-01.svg" alt="Logo" />
                        <div className="depth-8-frame-0"></div>
                      </div>
                    </div>
                    <div className="info3">
                      <div className="header3">
                        <div className="senior-product-designer">{project.title}</div>
                      </div>
                      <div className="sub">
                        <div className="_2019-present-3-years">{project.dates}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;