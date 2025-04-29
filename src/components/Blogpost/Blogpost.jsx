"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ChevronLeft,
  Heart,
  Share2,
  Bookmark,
  MessageSquare,
} from "lucide-react"
import "./Blogpost.css"

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

const fallbackImage = "/placeholder.svg?height=400&width=600"

const Blogpost = () => {
  const [selectedPost, setSelectedPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  
  const blogPosts = [
    {
      id: 1,
      title: "Educational Tour - Day 1",
      date: "April 7, 2025",
      excerpt:
        "Our first day of the educational tour was filled with excitement as we visited the Port Santiago, Metro Manila",
      coverImage: tourDay1Image || fallbackImage,
      content: `
        <p>Port santaigo </p>
        <p>Manila </p>
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
      tags: ["Science", "Museum", "Space", "Renewable Energy"],
    },
    {
      id: 2,
      title: "Educational Tour - Day 2",
      date: "April 8, 2025",
      excerpt:
        "",
      coverImage: tourDay2Image || fallbackImage,
      content: `
       
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
      tags: [""],
    },
    {
      id: 3,
      title: "Educational Tour - Day 3",
      date: "April 9, 2025",
      
      excerpt:
        "The third day was ",
      coverImage: tourDay3Image || fallbackImage,
      content: `
      
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
      tags: [""],
    },
    {
      id: 4,
      title: "Educational Tour - Day 4",
      date: "April 10, 2025",
      
      excerpt: "Our fourth day ",
      coverImage: tourDay4Image || fallbackImage,
      content: `
       
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
      tags: [""],
    },
    {
      id: 5,
      title: "Educational Tour - Day 5",
      date: "April 11, 2025",
      
      excerpt:
        "Our final day of the educational tour was spent at the Botanical Gardens, where we learned about biodiversity.",
      coverImage: tourDay5Image || fallbackImage,
      content: `
      
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
      tags: [""],
    },
  ]

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }, [])

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

  if (isLoading) {
    return (
      <div className="blog-loading">
        <div className="loader"></div>
        <p>Loading amazing content...</p>
      </div>
    )
  }

  return (
    <div className="blog-container">
      <button className="back-to-home" onClick={() => (window.location.href = "/")}>
        <ChevronLeft size={20} />
        <span>Back to Home</span>
      </button>

      {!selectedPost ? (
        <>
          <div className="blog-header">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
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
                    <span>Read Article</span>
                  </div>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-date">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="blog-read-time">
                    
                      {post.readTime}
                    </span>
                  </div>
                  <h3 onClick={() => handlePostClick(post)}>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-tags">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="blog-card-actions">
                    <button className="read-more-button" onClick={() => handlePostClick(post)}>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              <span className="blog-read-time">
                <Clock size={16} />
                {selectedPost.readTime}
              </span>
            </div>
            <div className="meta-right">
              <button className="action-button">
                <Share2 size={18} />
                <span>Share</span>
              </button>
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
                <span>Previous Day</span>
              </button>
            )}

            {selectedPost.id < blogPosts.length && (
              <button
                className="next-post"
                onClick={() => handlePostClick(blogPosts.find((post) => post.id === selectedPost.id + 1))}
              >
                <span>Next Day</span>
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Blogpost
