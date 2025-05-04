"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Search, X, Menu, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import "./Bloghome.css"

// Import images from assets folder
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

// Import thumbnail images - these should be actual image files in your assets folder
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

  // Toggle play/pause for main video
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

  // Toggle mute/unmute for main video
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  // Update progress bar for main video
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

  // Handle click on progress bar
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

  // Open video modal
  const openVideoModal = (video) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  // Close video modal
  const closeVideoModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
    setIsModalOpen(false)
    document.body.style.overflow = "" // Re-enable scrolling
  }

  // Recent videos data
  const recentVideos = [
    {
      id: 1,
      title: "Fort Santiago",
      date: "2 weeks ago",
      duration: "12:34",
      videoSrc: fortsantiago,
      thumbnail: fortsantiagothumbnail,
    },
    {
      id: 2,
      title: "Subic Bay",
      date: "2 weeks ago",
      duration: "12:34",
      videoSrc: subicbay,
      thumbnail: subicbaythumbnail,
    },
    {
      id: 3,
      title: "National Museum of Natural History",
      date: "2 weeks ago",
      duration: "12:34",
      videoSrc: nationalmuseums,
      thumbnail: nationalmuseumthumbnail,
    },
    {
      id: 4,
      title: "Hytec Power Inc",
      date: "2 weeks ago",
      duration: "12:34",
      videoSrc: hytec,
      thumbnail: hytecthumbnail,
    },
    {
      id: 5,
      title: "Train Depot and MMDA",
      date: "2 weeks ago",
      duration: "12:34",
      videoSrc: traindepotandmmda,
      thumbnail: traindepotthumbnail,
    },
    {
      id: 6,
      title: "Laser Tag SM North, Quezon City - IT4A",
      date: "2 weeks ago",
      duration: "12:34",
      videoSrc: lazerarena,
      thumbnail: lazerthumbnail,
    },
    {
      id: 7,
      title: "BGC",
      date: "2 weeks ago",
      duration: "12:34",
      videoSrc: rayhanVideo,
      thumbnail: bgcthumbnail,
    },
    {
      id: 8,
      title: "Burnham Park, Baguio City",
      date: "2 weeks ago",
      duration: "12:34",
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
      tags: ["MMDA", "Train Depot", "Transportation", "Traffic Management", "Urban Planning"],
      category: "infrastructure",
    },
    {
      id: 7,
      title: "Baguio Tour - Day 2",
      date: "April 13, 2025",
      excerpt: "2nd day in Baguio City",
      coverImage: tourDay7Image || fallbackImage,
      tags: ["MMDA", "Train Depot", "Transportation", "Traffic Management", "Urban Planning"],
      category: "infrastructure",
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    // Filter by category if not "all"
    if (activeFilter !== "all" && post.category !== activeFilter) {
      return false
    }

    // Filter by search query if present
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
    // Open in a new tab with the correct URL format
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
                  <a href="#blog" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#journey" onClick={() => setMobileMenuOpen(false)}>
                    My Journey
                  </a>
                </li>
                <li>
                  <a href="#videos" onClick={() => setMobileMenuOpen(false)}>
                    Videos
                  </a>
                </li>

                <li>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-actions">
            <button className="search-toggle" onClick={toggleSearch}>
              <Search size={20} />
            </button>
          </div>
        </header>
        {showSearch && (
          <div className="search-container">
            <div className="search-wrapper">
              <Search size={20} className="search-icon" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery("")}>
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Hero Banner */}
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
          >
       
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-buttons"
          >
            <a href="#blog" className="primary-button">
              Read Blog
            </a>
            <a href="#journey" className="secondary-button">
              Watch Journey
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Section */}
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
                  <a
                    href={`http://localhost:5174/blog/${post.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-card-image"
                  >
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
                    <a href={`http://localhost:5174/blog/${post.id}`} target="_blank" rel="noopener noreferrer">
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
            <div className="no-results">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3>No posts found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button
                  className="reset-filters"
                  onClick={() => {
                    setActiveFilter("all")
                    setSearchQuery("")
                  }}
                >
                  Reset Filters
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Video Journey Section */}
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
            >
            </motion.p>
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

      {/* Recent Videos Section */}
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

      {/* Video Modal */}
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

      <footer className="vlog-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              Ryee<span>Blog</span>
            </h2>
            <p className="footer-tagline">Exploring the world, one adventure at a time</p>
          </div>
          <div className="footer-links">
          
           
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </footer>
    </div>
  )
}
