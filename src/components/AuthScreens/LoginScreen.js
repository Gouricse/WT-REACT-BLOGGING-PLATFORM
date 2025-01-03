import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/index.css';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';

const HomePage = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const navigate = useNavigate();

  // Update theme class on body based on dark mode toggle
  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  // Track scroll position to apply flying-in animation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scrollY state when scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode); // Toggle the dark mode state
  };




  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      {/* Navbar with dark mode toggle */}
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        style={{
          padding: '0.5rem 1rem', // Make navbar smaller
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
          position: 'sticky',
          top: 0,
          zIndex: 1000, // Ensure navbar stays on top
        }}
      >
        <Container>
          {/* Title on the left */}
          <Navbar.Brand href="/" className="me-auto">
            KLE TECH Blogging Platform
          </Navbar.Brand>

          {/* Navbar toggle and items */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {/* Buttons aligned to the right */}
              <Button
                variant="primary"
                onClick={() => {
                  // Redirect to Register page
                  navigate('/register');
                }}
                className="me-2"
              >
                Register
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  // Redirect to Login page
                  navigate('/authlogin');
                }}
                className="me-2"
              >
                Login
              </Button>
              <Button variant="link" onClick={toggleTheme} style={{ color: 'white', background: 'none' }}>
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content with Background Image */}
      <div
        className="hero-section"
        style={{
          backgroundImage:
            'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d79c67a8-7603-46e4-b56f-fb9967f82eb2/debqlqh-e16d6b49-becb-430a-a9cb-258cd382cbca.jpg/v1/fill/w_1280,h_720,q_75,strp/black_mountains_dark_theme_wallpapers_by_mayankgorecha_debqlqh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDc5YzY3YTgtNzYwMy00NmU0LWI1NmYtZmI5OTY3ZjgyZWIyXC9kZWJxbHFoLWUxNmQ2YjQ5LWJlY2ItNDMwYS1hOWNiLTI1OGNkMzgyY2JjYS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zWTmfYJc66Y81eVdi-jIzAV2YQSihmuAIsvrPhAPkwU")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          color: 'white',
          textAlign: 'center',
          height: '100vh',
        }}
      >
        <Container>
          <h1>Welcome to the KLE TECH Blogging Platform</h1>
          <p>Share and explore ideas with the student community!</p>
          <Button
            variant="outline-light"
            onClick={() => {
              navigate('/register');
            }}
            size="lg"
            className="me-2"
          >
            Get Started
          </Button>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="align-items-center">
          <Col
            md={6}
            className={`text-center image-section ${scrollY > 150 ? 'fly-in' : ''}`}
          >
            <img
              src="https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-26355.jpg"
              alt="Blogimage"
              className="img-fluid rounded"
              style={{
                width: '100%',
                height: 'auto',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                marginBottom: '30px',
                transition: 'transform 0.5s ease-out',
              }}
            />
          </Col>
          <Col md={6}>
            <h2>About the Student Blogging Community</h2>
            <p>
              The KLE TECH Blogging Platform is a space designed for students to share their thoughts, ideas, and knowledge with the community.
              Join us to connect with like-minded individuals, expand your network, and be a part of the ever-growing student community.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>About the KLE Technological University</h2>
            <p>
              KLE Technological University is a vibrant academic community that encourages students to explore, innovate, and excel in their respective fields.
              It provides a nurturing environment for personal and professional growth, fostering a culture of collaboration and continuous learning.
            </p>
          </Col>
          <Col
            md={6}
            className={`text-center image-section order-md-2 ${scrollY > 150 ? 'fly-in' : ''}`}
          >
            <img
              src="https://www.kletech.ac.in/hubballi/images/abt-over-img.jpg"
              alt="Blogimage"
              className="img-fluid rounded"
              style={{
                width: '100%',
                height: 'auto',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                marginBottom: '30px',
                transition: 'transform 0.5s ease-out',
              }}
            />
          </Col>
        </Row>
      </Container>

      <footer style={{ backgroundColor: '#475762', color: 'white', padding: '20px 0', marginTop: 'auto' }}>
        <Container className="text-center">
          <p>&copy; 2024 KLE TECH Blogging Platform. All rights reserved.</p>
          <p>
            <a href="https://kletech.ac.in" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
              Visit KLE TECH Website
            </a>
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;