"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, X, Menu, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import "./Bloghome.css"
import profileImage from "../../assets/rayray.jpg"

import tourDay1Image from "../../assets/tourDay1Image.jpg"
import tourDay2Image from "../../assets/gallery4Day2.jpg"
import tourDay3Image from "../../assets/naturalmuseum.jpg"
import tourDay4Image from "../../assets/hytec.jpg"
import tourDay5Image from "../../assets/lrt.jpg"
import tourDay6Image from "../../assets/baguio1.jpg"
import tourDay7Image from "../../assets/baguio2.jpg"
import rayhanVideo from "../../assets/rayhan.mov.mov"

import burnhamthumbnail from "../../assets/burnhamthumbnail.jpg"
import lazerthumbnail from "../../assets/lazerthumbnail.jpg"

import fortsantiago from "../../assets/fortsantiago.mov"
import subicbay from "../../assets/subicbay.mov"
import nationalmuseums from "../../assets/nationalmuseum.mov"
import hytec from "../../assets/hytec.mov"
import traindepotandmmda from "../../assets/traindepotandmmda.mov"

import lazerarena from "../../assets/lazer.mov"
import burnham from "../../assets/burnham.mov"
import bgc from "../../assets/bgc.mov"

import fortsantiagothumbnail from "../../assets/fortsantiagothumbnail.jpg"
import subicbaythumbnail from "../../assets/subicbaythumbnail.jpg"
import nationalmuseumthumbnail from "../../assets/nationalmuseumthumbnail.jpg"
import hytecthumbnail from "../../assets/hytecthumbnail.jpg"
import traindepotthumbnail from "../../assets/traindepotthumbnail.jpg"
import bgcthumbnail from "../../assets/bgcthumbnail.jpg"

const fallbackImage = "/placeholder.svg?height=300&width=500"

export default function Bloghome() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentProgress, setCurrentProgress] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const searchInputRef = useRef(null)
  const videoRef = useRef(null)
  const modalVideoRef = useRef(null)
  const progressRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }


  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100
      setCurrentProgress(progress)
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`
      }
    }

    video.addEventListener("timeupdate", updateProgress)
    return () => {
      video.removeEventListener("timeupdate", updateProgress)
    }
  }, [])


  const handleProgressClick = (e) => {
    if (!videoRef.current) return

    const progressBar = e.currentTarget
    const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth
    const newTime = clickPosition * videoRef.current.duration

    videoRef.current.currentTime = newTime
    if (progressRef.current) {
      progressRef.current.style.width = `${clickPosition * 100}%`
    }
  }


  const openVideoModal = (video) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden" 
  }

  const closeVideoModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
    setIsModalOpen(false)
    document.body.style.overflow = "" 
  }

  const recentVideos = [
    {
      id: 1,
      title: "Fort Santiago",
      date: "- April 7, 2025",
      duration: "00:22",
      videoSrc: fortsantiago,
      thumbnail: fortsantiagothumbnail,
    },
    {
      id: 2,
      title: "Subic Bay",
      date: "- April 8, 2025",
      duration: "00:19",
      videoSrc: subicbay,
      thumbnail: subicbaythumbnail,
    },
    {
      id: 3,
      title: "National Museum of Natural History",
      date: "- April 9, 2025",
      duration: "00:21",
      videoSrc: nationalmuseums,
      thumbnail: nationalmuseumthumbnail,
    },
    {
      id: 4,
      title: "Hytec Power Inc",
      date: "- April 10, 2025",
      duration: "00:16",
      videoSrc: hytec,
      thumbnail: hytecthumbnail,
    },
    {
      id: 5,
      title: "Train Depot and MMDA",
      date: "- April 11, 2025",
      duration: "00:26",
      videoSrc: traindepotandmmda,
      thumbnail: traindepotthumbnail,
    },
    {
      id: 6,
      title: "Laser Tag SM North, Quezon City - IT4A",
      date: "- April 10, 2025",
      duration: "00:24",
      videoSrc: lazerarena,
      thumbnail: lazerthumbnail,
    },
    {
      id: 7,
      title: "BGC",
      date: "- April 6, 2025",
      duration: "00:18",
      videoSrc: bgc,
      thumbnail: bgcthumbnail,
    },
    {
      id: 8,
      title: "Burnham Park, Baguio City",
      date: "- April 13, 2025",
      duration: "00:20",
      videoSrc: burnham,
      thumbnail: burnhamthumbnail,
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Educational Tour - Day 1",
      date: "April 7, 2025",
      excerpt: "Our first day of the educational tour in Fort Santiago, Metro Manila",
      coverImage: tourDay1Image || fallbackImage,
      tags: ["Exhibits", "Museum", "Pasig River", "Rizal's Trail", "Spanish-Era Ruins"],
      category: "history",
    },
    {
      id: 2,
      title: "Educational Tour - Day 2",
      date: "April 8, 2025",
      excerpt: "Second day of the educational tour in Subic Bay Freeport Zone",
      coverImage: tourDay2Image || fallbackImage,
      tags: ["Freeport Zone", "SBMA", "Baywalk", "Murals", "Infrastructure"],
      category: "travel",
    },
    {
      id: 3,
      title: "Educational Tour - Day 3",
      date: "April 9, 2025",
      excerpt: "Third day of the educational tour in National Museum of Natural History, Metro Manila",
      coverImage: tourDay3Image || fallbackImage,
      tags: ["Natural History", "Anthropology", "Fine Arts", "Tree of Life", "Filipino Heritage"],
      category: "culture",
    },
    {
      id: 4,
      title: "Educational Tour - Day 4",
      date: "April 10, 2025",
      excerpt: "Fourth day of the educational tour in HytecPower Inc, Quezon City",
      coverImage: tourDay4Image || fallbackImage,
      tags: ["Robotics", "Technical Education", "Automation", "Engineering", "Vocational Training"],
      category: "technology",
    },
    {
      id: 5,
      title: "Educational Tour - Day 5",
      date: "April 11, 2025",
      excerpt: "Fifth day of the educational tour in MMDA and Train Depot",
      coverImage: tourDay5Image || fallbackImage,
      tags: ["MMDA", "Train Depot", "Transportation", "Traffic Management", "Urban Planning"],
      category: "infrastructure",
    },
    {
      id: 6,
      title: "Baguio Tour - Day 1",
      date: "April 12, 2025",
      excerpt: "First day in Baguio City",
      coverImage: tourDay6Image || fallbackImage,
      tags: ["Strawberry Farm", "Mines View", "Bell Church Temple", "PMA"],
      category: "infrastructure",
    },
    {
      id: 7,
      title: "Baguio Tour - Day 2",
      date: "April 13, 2025",
      excerpt: "2nd day in Baguio City",
      coverImage: tourDay7Image || fallbackImage,
      tags: ["SM City Baguio", "Burnham Park"],
      category: "infrastructure",
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {

    if (activeFilter !== "all" && post.category !== activeFilter) {
      return false
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    return true
  })

  const toggleSearch = () => {
    setShowSearch(!showSearch)
    if (!showSearch) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    } else {
      setSearchQuery("")
    }
  }

  const handlePostClick = (post) => {

    window.open(`/blog/${post.id}`, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="main-wrapper">
      <div className="header-wrapper">
        <header className="vlog-header">
          <div className="logo">
            <h1>
              Ryee<span>Blog</span>
            </h1>
          </div>
          <div className="navbar-container">
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`vlog-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
              <ul>
                <li>
                  <a
                    href="#blog"
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      document.getElementById("blog").scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#journey"
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      document.getElementById("journey").scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    My Journey
                  </a>
                </li>
                <li>
                  <a
                    href="#videos"
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      document.getElementById("videos").scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      document.getElementById("about").scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-actions"></div>
        </header>
      </div>

  
      <section className="hero-banner">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Educational Tour <span>2025</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          ></motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-buttons"
          >
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("blog").scrollIntoView({ behavior: "smooth" })
              }}
              className="primary-button"
            >
              Read Blog
            </a>
            <a
              href="#journey"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("journey").scrollIntoView({ behavior: "smooth" })
              }}
              className="secondary-button"
            >
              Watch Journey
            </a>
          </motion.div>
        </div>
      </section>

    
      <section id="blog" className="blog-section">
        <div className="blog-container">
          <div className="blog-header">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              Educational Tour Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            ></motion.p>
          </div>

          {isLoading ? (
            <div className="blog-loading">
              <div className="loader"></div>
              <p>Loading blog posts...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <a href={`/blog/${post.id}`} target="_blank" rel="noopener noreferrer" className="blog-card-image">
                    <img src={post.coverImage || "/placeholder.svg"} alt={post.title} />
                    <div className="blog-card-overlay">
                      <span>Read Post</span>
                    </div>
                  </a>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-date">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                    </div>
                    <a href={`/blog/${post.id}`} target="_blank" rel="noopener noreferrer">
                      <h3>{post.title}</h3>
                    </a>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-tags">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="blog-tag">
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && <span className="blog-tag more-tag">+{post.tags.length - 3}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="no-results"></div>
          )}
        </div>
      </section>

   
      <section id="journey" className="video-journey-section">
        <div className="video-container">
          <div className="video-header">
            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              Watch My Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            ></motion.p>
          </div>

          <motion.div
            className="video-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="video-player">
              <video
                ref={videoRef}
                src={rayhanVideo}
                poster=""
                controls={false}
                className="main-video"
                onClick={togglePlay}
                onEnded={() => setIsPlaying(false)}
              />

              <div className="video-controls">
                <button className="control-button play-pause" onClick={togglePlay}>
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <div className="video-progress" onClick={handleProgressClick}>
                  <div className="progress-bar">
                    <div className="progress-filled" ref={progressRef}></div>
                  </div>
                </div>
                <button className="control-button volume" onClick={toggleMute}>
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <button className="control-button fullscreen" onClick={() => videoRef.current?.requestFullscreen()}>
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

   
      <section id="videos" className="recent-videos-section">
        <div className="container">
          <div className="section-header">
            <h2>Videos</h2>
            <div className="accent-line"></div>
          </div>

          <div className="videos-grid portrait-grid videos-only">
            {recentVideos.map((video) => (
              <div key={video.id} className="video-card video-only" onClick={() => openVideoModal(video)}>
                <div className="video-thumbnail portrait">
                  <img
                    src={video.thumbnail || "/placeholder.svg?height=400&width=225"}
                    alt={video.title}
                    className="thumbnail-preview"
                    style={{ objectPosition: "center", aspectRatio: "9/16" }}
                  />
                  <div className="play-overlay">
                    <Play size={40} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {isModalOpen && selectedVideo && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeVideoModal}>
              <X size={24} />
            </button>
            <h3 className="modal-title">{selectedVideo.title}</h3>
            <div
              className={`modal-video-container ${selectedVideo && (selectedVideo.id === 5 || selectedVideo.videoSrc.includes("burnham") || selectedVideo.videoSrc.includes("lazer")) ? "portrait-container" : ""} smaller-video-container`}
            >
              <video ref={modalVideoRef} src={selectedVideo.videoSrc} controls autoPlay className="modal-video"></video>
            </div>
            <div className="modal-video-info">
              <p className="modal-posted-date">Date {selectedVideo.date}</p>
            </div>
          </div>
        </div>
      )}

      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="accent-line"></div>
          </div>

          <div className="about-content">
            <div className="about-image">
              <img src={profileImage || "/placeholder.svg"} alt="Profile" className="profile-image" />
            </div>
            <div className="about-text">
              <h3>Hello, I'm Ryee</h3>
              <p>
                Welcome to my blog! I'm a passionate explorer and storyteller documenting my educational journey and
                adventures. Through this platform, I share my experiences from various educational tours, cultural
                visits, and travel explorations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="vlog-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              Ryee<span>Blog</span>
            </h2>
            <p className="footer-tagline">Educational Tour 2025 - BSIT</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/rayhan-payao-13b651360/">LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/rayhanpayao25/">Github</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/rayray.pw">Facebook</a>
                </li>
                <li>
                  <a href="mailto:rayhanpyo2016@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
