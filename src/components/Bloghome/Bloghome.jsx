"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Share2,
  Search,
  Heart,
  MessageCircle,
  Bookmark,
  ChevronDown,
  Filter,
  Eye,
  ThumbsUp,
  ExternalLink,
  Camera,
  Play,
  Menu,
  X,
} from "lucide-react"
import "./Bloghome.css"
import videoFile from "../../assets/rayhan.mov.mov"

// Import images from assets folder
import tourDay1Image from "../../assets/portsantiago.jpg"
import tourDay2Image from "../../assets/subicbay.jpg"
import tourDay3Image from "../../assets/naturalmuseum.jpg"
import tourDay4Image from "../../assets/hytec.jpg"
import tourDay5Image from "../../assets/lrt.jpg"

// Import gallery images
import gallery1Day1 from "../../assets/rayhanpayao.jpg"
import gallery2Day1 from "../../assets/rayhanpayao.jpg"
import gallery3Day1 from "../../assets/rayhanpayao.jpg"

import gallery1Day2 from "../../assets/rayhanpayao.jpg"
import gallery2Day2 from "../../assets/rayhanpayao.jpg"
import gallery3Day2 from "../../assets/rayhanpayao.jpg"

import gallery1Day3 from "../../assets/rayhanpayao.jpg"
import gallery2Day3 from "../../assets/rayhanpayao.jpg"
import gallery3Day3 from "../../assets/rayhanpayao.jpg"

import gallery1Day4 from "../../assets/rayhanpayao.jpg"
import gallery2Day4 from "../../assets/rayhanpayao.jpg"
import gallery3Day4 from "../../assets/rayhanpayao.jpg"

import gallery1Day5 from "../../assets/rayhanpayao.jpg"
import gallery2Day5 from "../../assets/rayhanpayao.jpg"
import gallery3Day5 from "../../assets/rayhanpayao.jpg"

const fallbackImage = "/placeholder.svg?height=300&width=500"

export default function VlogHomepage() {
  const [email, setEmail] = useState("")
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMobileVideoPlaying, setIsMobileVideoPlaying] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [likedPosts, setLikedPosts] = useState([])
  const [savedPosts, setSavedPosts] = useState([])

  const videoRef = useRef(null)
  const mobileVideoRef = useRef(null)
  const searchInputRef = useRef(null)

  const blogPosts = [
    {
      id: 1,
      title: "Educational Tour - Day 1",
      date: "April 7, 2025",
      excerpt: "Our first day of the educational tour in Port Santiago, Metro Manila",
      coverImage: tourDay1Image || fallbackImage,
      content: `
        <p>Our first day of the educational tour was really exciting. We left our dorm at around 1:00 PM and headed straight to 
        Fort Santiago in Metro Manila. It was my first time going there.  When we arrived,
         I was amazed by how old and strong the place looked, the thick stone walls, the wooden gates, and the big arch with a 
         Spanish symbol on it. </p>
        <p>As we entered, our guide told us about the history of Fort Santiago. I learned that it was built during the Spanish 
        colonial period and was once used as a prison, even for national heroes like Dr. José Rizal. We got to walk through the 
        same places where he was once held. It was kind of eerie but also inspiring. One thing that stood out was the trail of 
        Rizal's final footsteps marked on the ground.</p>
        <p>We also explored the gardens and took lots of pictures near the river, the cannons, and the museum. The guide also told us how 
        Fort Santiago was damaged during World War II but still stands today as a symbol of the country's history and strength.</p> 
      `,
      images: [
        {
          src: gallery1Day1 || fallbackImage,
          alt: "Students boarding the bus",
          caption: "Students eagerly boarding the bus for our educational tour",
        },
        {
          src: gallery2Day1 || fallbackImage,
          alt: "Space Exploration exhibit",
          caption: "Students exploring the Space Exploration gallery",
        },
        {
          src: gallery3Day1 || fallbackImage,
          alt: "Solar car workshop",
          caption: "Building and racing solar-powered cars during the workshop",
        },
      ],
      tags: ["Exhibits", "Museum", "Pasig River", "Rizal's Trail", "Spanish-Era Ruins"],
      category: "history",

    },
    {
      id: 2,
      title: "Educational Tour - Day 2",
      date: "April 8, 2025",
      excerpt: "Second day of the educational tour in Subic Bay Freeport Zone",
      coverImage: tourDay2Image || fallbackImage,
      content: `
       
      <p>We started our second day early, leaving Quezon City at 6:00 AM and arriving at the Subic Bay Freeport Zone by 8:00 AM.
      Our tour took place entirely inside the Freeport Zone, where we explored various places and facilities. One of the highlights 
      was our visit to the SBMA (Subic Bay Metropolitan Authority) headquarters. We learned about the area's development, watched 
      presentations, and saw detailed scale models of the zone's infrastructure and future plans. </p>


      <p>We also visited several murals and artworks inside the buildings—colorful tributes to the history and people behind Subic's 
      progress. From there, we visited the communication towers, which offered a great view of the bay and made for stunning photos 
      against the clear sky.</p>

      <p>Afterwards, we headed to the baywalk area, where we enjoyed the peaceful seascape, took lots of pictures, and just relaxed by 
      the water. Of course, we didn't forget to buy souvenirs—one of our favorites was a bright "Subic Bay" magnet. </p>

      <p>At around 3:00 PM, we wrapped up our visit and started our journey back to Quezon City. It was a short but meaningful trip—filled 
      with new knowledge, beautiful scenery, and great memories. </p>
      `,
      images: [
        {
          src: gallery1Day2 || fallbackImage,
          alt: "Historical Museum entrance",
          caption: "The grand entrance of the Historical Museum",
        },
        {
          src: gallery2Day2 || fallbackImage,
          alt: "Medieval weapons display",
          caption: "Students examining the medieval weapons collection",
        },
        {
          src: gallery3Day2 || fallbackImage,
          alt: "Archaeological workshop",
          caption: "Participating in the archaeological workshop",
        },
      ],
      tags: ["Freeport Zone", "SBMA", "Baywalk", "Murals", "Infrastructure"],
      category: "travel",

    },
    {
      id: 3,
      title: "Educational Tour - Day 3",
      date: "April 9, 2025",
      excerpt: "Third day of the educational tour in National Museum of Natural History, Metro Manila",
      coverImage: tourDay3Image || fallbackImage,
      content: `
    <p>On the third day of our tour, we left at 8:00 AM to visit the national museums in Manila. Our first stop was the National Museum 
    of Natural History. When we entered, we were amazed by the big structure in the center called the "Tree of Life." It looked very 
    modern and artistic. Inside, we saw different animals, fossils, skeletons, and information about the environment and biodiversity
     in the Philippines.</p>
      
    <p>And then, we went to the National Museum of Anthropology, where we learned more about the culture of different Filipino ethnic groups. 
    There were displays of traditional clothing, tools, and even models of houses from different tribes. It helped us appreciate how 
    diverse and rich our culture is. </p>


    <p>After that, we went to the National Museum of Fine Arts, where we saw beautiful artworks by famous Filipino painters. 
    The paintings and sculptures showed a lot about our country's history and identity through art. </p>


    <p>Lastly, we visited the Museo ni Manuel L. Quezon, where we saw his old cars and other memorabilia. It gave us a glimpse into 
    the life of our former president and the struggles during his time. </p>

    <p>It was a tiring but very educational day. We learned a lot about nature, culture, art, and history. 
    This experience helped us become more proud and aware of our Filipino heritage. </p>
      `,
      images: [
        {
          src: gallery1Day3 || fallbackImage,
          alt: "Research center tour",
          caption: "Tour of the renewable energy research center",
        },
        {
          src: gallery2Day3 || fallbackImage,
          alt: "Water purification experiment",
          caption: "Conducting a water purification experiment",
        },
        {
          src: gallery3Day3 || fallbackImage,
          alt: "Virtual reality experience",
          caption: "Experiencing virtual reality at the technology park",
        },
      ],
      tags: ["Natural History", "Anthropology", "Fine Arts", "Tree of Life", "Filipino Heritage"],
      category: "culture",
   
    },
    {
      id: 4,
      title: "Educational Tour - Day 4",
      date: "April 10, 2025",
      excerpt: "Fourth day of the educational tour in HytecPower Inc, Quezon City",
      coverImage: tourDay4Image || fallbackImage,
      content: `
      <p> On the fourth day of our tour, we visited Hytec Power Inc. in Quezon City. We learned about the company's role in technical 
      and vocational education. The staff gave us a tour of their training facilities, and we were able to see different kinds of
      machines and equipment used in industries today.</p>
      <p> We saw control panels, air conditioning units, and simulators for electrical, hydraulic, and pneumatic systems. One of the 
      most exciting parts was the robotics area. There, we watched robotic arms in action and tried controlling small robots ourselves. 
      Some of us used remote controls to move the robots and complete simple tasks, which helped us understand how automation works.</p>
      <p>We also participated in some group activities and watched technical demonstrations. These activities helped us see how important 
      hands-on training is in learning about technology and engineering. </p>
      <p>Iit was a fun and educational experience. We learned a lot about how machines and robots are used in real-life industries,
      and it gave us a better understanding of what it's like to work in the technical field.</p>
    
      `,
      images: [
        {
          src: gallery1Day4 || fallbackImage,
          alt: "Art gallery tour",
          caption: "Admiring paintings at the National Art Gallery",
        },
        {
          src: gallery2Day4 || fallbackImage,
          alt: "Painting demonstration",
          caption: "Watching an oil painting demonstration",
        },
        {
          src: gallery3Day4 || fallbackImage,
          alt: "Cultural performance",
          caption: "Enjoying the traditional cultural performance",
        },
      ],
      tags: ["Robotics", "Technical Education", "Automation", "Engineering", "Vocational Training"],
      category: "technology",
  
    },
    {
      id: 5,
      title: "Educational Tour - Day 5",
      date: "April 11, 2025",
      excerpt: "Fifth day of the educational tour in MMDA and Train Depot",
      coverImage: tourDay5Image || fallbackImage,
      content: `
      <p>Our final day of the educational tour we left at 8:00 AM to visit a train facility and the MMDA (Metropolitan Manila 
      Development Authority).When we arrived at the train site, we were given safety equipment like helmets and reflective vests. 
      We explored the train depot and observed how the trains are cleaned, repaired, and prepared for daily operations. We even had 
      the opportunity to go inside the trains and take photos. It was fascinating to see how much work goes on behind the scenes to 
      make sure trains are safe and efficient for passengers.",</p>

      <p>After the train visit, we proceeded to the MMDA office. Inside, we were shown the main control room where live traffic feeds 
      from across Metro Manila are displayed on large screens. An officer explained how they monitor traffic, respond to emergencies, 
      and help reduce congestion in busy areas. We realized how important traffic management is in keeping the city organized.</p>

      <p>the day was full of learning and new experiences. We gained a better understanding of how transportation systems and traffic 
      management work, and we appreciated the effort of the people behind them. </p>
      `,
      images: [
        {
          src: gallery1Day5 || fallbackImage,
          alt: "Botanical Gardens entrance",
          caption: "The beautiful entrance to the Botanical Gardens",
        },
        {
          src: gallery2Day5 || fallbackImage,
          alt: "Tropical rainforest section",
          caption: "Exploring the tropical rainforest section",
        },
        {
          src: gallery3Day5 || fallbackImage,
          alt: "Seed planting workshop",
          caption: "Students participating in the seed planting workshop",
        },
      ],
      tags: ["MMDA", "Train Depot", "Transportation", "Traffic Management", "Urban Planning"],
      category: "infrastructure",
 
    },
    {
      id: 6,
      title: "Baguio Tour - Day 1",
      date: "April 12, 2025",
      readTime: "7 min read",
      excerpt: "Reflecting on the best moments from our educational tour",
      coverImage: tourDay2Image || fallbackImage,
      content: `
       
      <p>After five incredible days of exploration and learning, I wanted to take a moment to reflect on the highlights of our educational tour. From historical sites to technological marvels, we experienced such a diverse range of educational opportunities.</p>

      <p>The most impactful experience for me was our visit to Fort Santiago, where we could literally walk in the footsteps of our national heroes. The sense of history was palpable, and it connected us to our past in a way that textbooks never could.</p>

      <p>The technological demonstrations at Hytec Power were also eye-opening. Seeing robotics and automation in action gave us a glimpse into the future of industry and the skills we'll need to develop.</p>

      <p>Beyond the educational aspects, the tour also strengthened our bonds as classmates. We shared meals, took countless photos, and created memories that will last long after our school days are over.</p>

      <p>I'm grateful to our teachers and tour guides who made this experience possible. Their knowledge and enthusiasm enhanced every stop along the way.</p>
      `,
      images: [
        {
          src: gallery1Day2 || fallbackImage,
          alt: "Group photo at Fort Santiago",
          caption: "Our class at the entrance of Fort Santiago",
        },
        {
          src: gallery2Day2 || fallbackImage,
          alt: "Robotics demonstration",
          caption: "Watching the robotics demonstration at Hytec Power",
        },
        {
          src: gallery3Day2 || fallbackImage,
          alt: "Final day celebration",
          caption: "Celebrating the end of our educational tour",
        },
      ],
      tags: ["Highlights", "Reflection", "Educational", "Memories", "Student Life"],
      category: "reflection",
     
    },
    {
      id: 7,
      title: "Baguio Tour - Day 2",
      date: "April 13, 2025",
      readTime: "8 min read",
      excerpt: "Tips and recommendations for organizing an educational tour",
      coverImage: tourDay3Image || fallbackImage,
      content: `
    <p>After our successful educational tour, many people have asked me for advice on planning their own. Here are some tips based on our experience:</p>
      
    <p><strong>1. Set Clear Learning Objectives:</strong> Before choosing destinations, define what you want to learn. Our tour focused on history, culture, technology, and infrastructure, which gave us a well-rounded experience.</p>

    <p><strong>2. Mix Educational with Enjoyable:</strong> Balance serious learning with fun activities. We had structured tours but also free time to explore and take photos, which kept everyone engaged.</p>

    <p><strong>3. Prepare in Advance:</strong> Research each location before visiting. Our teachers provided us with background information, which enhanced our understanding and appreciation of each site.</p>

    <p><strong>4. Document Everything:</strong> Take photos, videos, and notes. I'm glad I kept a daily journal, which helped me remember details when writing these blog posts.</p>

    <p><strong>5. Reflect Afterwards:</strong> Schedule time to discuss and reflect on what you've learned. Our class had a sharing session after the tour, which helped solidify our learning.</p>

    <p>Planning an educational tour takes effort, but the learning experiences and memories make it all worthwhile!</p>
      `,
      images: [
        {
          src: gallery1Day3 || fallbackImage,
          alt: "Planning session",
          caption: "Our class during the pre-tour planning session",
        },
        {
          src: gallery2Day3 || fallbackImage,
          alt: "Tour itinerary",
          caption: "The detailed itinerary we created for our tour",
        },
        {
          src: gallery3Day3 || fallbackImage,
          alt: "Group discussion",
          caption: "Post-tour reflection and discussion",
        },
      ],
      tags: ["Planning", "Tips", "Organization", "Education", "Travel Guide"],
      category: "guide",
   
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

  const toggleVideo = (isMobile) => {
    if (isMobile) {
      if (isMobileVideoPlaying) {
        mobileVideoRef.current.pause()
        setIsMobileVideoPlaying(false)
      } else {
        mobileVideoRef.current.play()
        setIsMobileVideoPlaying(true)
      }
    } else {
      if (isVideoPlaying) {
        videoRef.current.pause()
        setIsVideoPlaying(false)
      } else {
        videoRef.current.play()
        setIsVideoPlaying(true)
      }
    }
  }

  const handleLearnMoreClick = () => {
    // Navigate to education tour page or open modal
    alert("Education Tour details coming soon!")
  }

 

  const handlePostClick = (post) => {
    setSelectedPost(post)
    setActiveImageIndex(0)
    window.scrollTo(0, 0)
  }

  const handleBackClick = () => {
    setSelectedPost(null)
    window.scrollTo(0, 0)
  }

  const nextImage = () => {
    if (selectedPost) {
      setActiveImageIndex((prev) => (prev === selectedPost.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedPost) {
      setActiveImageIndex((prev) => (prev === 0 ? selectedPost.images.length - 1 : prev - 1))
    }
  }

  const toggleLike = (postId, e) => {
    e.stopPropagation()
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const toggleSave = (postId, e) => {
    e.stopPropagation()
    setSavedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

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

  // Pause videos when component unmounts
  useEffect(() => {
    return () => {
      if (videoRef.current) videoRef.current.pause()
      if (mobileVideoRef.current) mobileVideoRef.current.pause()
    }
  }, [])

  // Simulate loading data for blog posts
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }, [])

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
                  <a href="#journey" onClick={() => setMobileMenuOpen(false)}>
                    My Journey
                  </a>
                </li>
                <li>
                  <a href="#recent" onClick={() => setMobileMenuOpen(false)}>
                    Recent
                  </a>
                </li>
                <li>
                  <a href="#blog" onClick={() => setMobileMenuOpen(false)}>
                    Blog
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
            Documenting my journey through learning, exploration, and discovery
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

      {/* Blog Post Section - Added below Recent Videos */}
      <section id="blog" className="blog-section">
        <div className="blog-container">
          {!selectedPost ? (
            <>
              <div className="blog-header">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Educational Tour Blog
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Follow my journey through an amazing educational experience, day by day
                </motion.p>
              </div>

              <div className="blog-filters">
                <div className="filter-categories">
                  <button
                    className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
                    onClick={() => setActiveFilter("all")}
                  >
                    All
                  </button>
                  <button
                    className={`filter-button ${activeFilter === "history" ? "active" : ""}`}
                    onClick={() => setActiveFilter("history")}
                  >
                    History
                  </button>
                  <button
                    className={`filter-button ${activeFilter === "culture" ? "active" : ""}`}
                    onClick={() => setActiveFilter("culture")}
                  >
                    Culture
                  </button>
                  <button
                    className={`filter-button ${activeFilter === "technology" ? "active" : ""}`}
                    onClick={() => setActiveFilter("technology")}
                  >
                    Technology
                  </button>
                  <button
                    className={`filter-button ${activeFilter === "travel" ? "active" : ""}`}
                    onClick={() => setActiveFilter("travel")}
                  >
                    Travel
                  </button>
                </div>
                <div className="filter-sort">
                  <button className="sort-button">
                    <Filter size={16} />
                    <span>Sort</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
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
                      <div className="blog-card-image" onClick={() => handlePostClick(post)}>
                        <img src={post.coverImage || "/placeholder.svg"} alt={post.title} />
                        <div className="blog-card-overlay">
                          <span>Read Post</span>
                        </div>
                      </div>
                      <div className="blog-card-content">
                        <div className="blog-card-meta">
                          <span className="blog-date">
                            <Calendar size={14} />
                            {post.date}
                          </span>
                         
                        </div>
                        <h3 onClick={() => handlePostClick(post)}>{post.title}</h3>
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
            </>
          ) : (
            <div className="blog-post-detail">
              <motion.button
                className="back-button"
                onClick={handleBackClick}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ x: -5 }}
              >
                <ArrowLeft size={20} />
                <span>Back to all posts</span>
              </motion.button>

              <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {selectedPost.title}
              </motion.h1>

              <div className="blog-post-meta">
                <div className="meta-left">
                  <span className="blog-date">
                    <Calendar size={16} />
                    {selectedPost.date}
                  </span>
                  
                </div>
                <div className="meta-right">
                
                </div>
              </div>

              <div className="blog-post-featured-image">
                <img src={selectedPost.coverImage || "/placeholder.svg"} alt={selectedPost.title} />
              </div>

              <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: selectedPost.content }}></div>

              <div className="blog-post-tags">
                {selectedPost.tags.map((tag, i) => (
                  <span key={i} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>

           
              <div className="blog-post-gallery">
                <h2>Photo Gallery</h2>
                <div className="gallery-showcase">
                  <button className="gallery-nav prev" onClick={prevImage}>
                    <ArrowLeft size={24} />
                  </button>
                  <div className="gallery-main">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="gallery-image-container"
                      >
                        <img
                          src={selectedPost.images[activeImageIndex].src || "/placeholder.svg"}
                          alt={selectedPost.images[activeImageIndex].alt}
                        />
                        <p className="image-caption">{selectedPost.images[activeImageIndex].caption}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <button className="gallery-nav next" onClick={nextImage}>
                    <ArrowRight size={24} />
                  </button>
                </div>
                <div className="gallery-thumbnails">
                  {selectedPost.images.map((image, index) => (
                    <div
                      key={index}
                      className={`gallery-thumbnail ${index === activeImageIndex ? "active" : ""}`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img src={image.src || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="blog-navigation">
                {selectedPost.id > 1 && (
                  <button
                    className="prev-post"
                    onClick={() => handlePostClick(blogPosts.find((post) => post.id === selectedPost.id - 1))}
                  >
                    <ArrowLeft size={20} />
                    <span>Previous Post</span>
                  </button>
                )}

                {selectedPost.id < blogPosts.length && (
                  <button
                    className="next-post"
                    onClick={() => handlePostClick(blogPosts.find((post) => post.id === selectedPost.id + 1))}
                  >
                    <span>Next Post</span>
                    <ArrowRight size={20} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="vlog-container">
        <div id="journey" className="video-section desktop-view">
          <div className="video-split-container">
            <div className="video-left-container">
              <h2 className="section-title video-title">Watch My Journey</h2>
              <div className="video-wrapper" style={{ maxWidth: "100%" }}>
                <video
                  ref={videoRef}
                  className="feature-video"
                  onClick={() => toggleVideo(false)}
                  controls
                  preload="metadata"
                  playsInline
                  style={{ maxHeight: "450px" }}
                >
                  <source src={videoFile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
               
              </div>

             
            </div>

           

             

          </div>
        </div>

        

        <section id="recent" className="recent-videos">
          <h2>Recent Videos</h2>
          <div className="videos-container">
            <div className="video-grid">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="video-card">
                  <div className="thumbnail-container">
                    <img
                      src={`/placeholder.svg?height=200&width=350&text=Video ${item}`}
                      alt={`Video ${item} thumbnail`}
                    />
                    <span className="duration">12:34</span>
                  </div>
                  <h4>Amazing Travel Destination #{item}</h4>
                  <div className="video-meta">
                    <p className="video-date">Posted 2 weeks ago</p>
                  
                  </div>
                </div>
              ))}
            </div>
            <button className="load-more">Load More Videos</button>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-content">
            <div className="about-image">
              <img
                src="/placeholder.svg?height=400&width=400&text=Profile"
                alt="Vlogger profile"
                className="profile-image"
              />
            </div>
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Hello! I'm Rayhan, a passionate travel vlogger with a love for exploring new cultures, tasting exotic
                foods, and finding hidden gems around the world. I started this vlog in 2018 after quitting my corporate
                job to pursue my dream of traveling full-time.
              </p>
              <p>
                My mission is to inspire you to step out of your comfort zone and experience the incredible diversity
                our world has to offer. Whether you're an experienced traveler or planning your first trip, I hope my
                videos provide valuable insights and inspiration.
              </p>
              <div className="social-links">
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

    

        <footer className="vlog-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>
                Travel<span>Blog</span>
              </h2>
              <p className="footer-tagline">Exploring the world, one adventure at a time</p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Content</h4>
                <ul>
                  <li>
                    <a href="#">Videos</a>
                  </li>
                  <li>
                    <a href="#">Destinations</a>
                  </li>
                  <li>
                    <a href="#">Travel Guides</a>
                  </li>
                  <li>
                    <a href="#">Equipment</a>
                  </li>
                </ul>
              </div>
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
              <div className="footer-section">
                <h4>Information</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} TravelBlog. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
