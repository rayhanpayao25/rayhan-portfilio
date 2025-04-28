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
import tourDay1Image from "../../assets/rayhanpayao.jpg"
import tourDay2Image from "../../assets/rayhanpayao.jpg"
import tourDay3Image from "../../assets/rayhanpayao.jpg"
import tourDay4Image from "../../assets/rayhanpayao.jpg"
import tourDay5Image from "../../assets/rayhanpayao.jpg"

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
// Fallback image if any import fails
const fallbackImage = "/placeholder.svg?height=400&width=600"

const Blogpost = () => {
  const [selectedPost, setSelectedPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Define blog posts with imported images
  const blogPosts = [
    {
      id: 1,
      title: "Educational Tour - Day 1",
      date: "April 7, 2025",
      readTime: "5 min read",
      excerpt:
        "Our first day of the educational tour was filled with excitement as we visited the Science Museum and participated in interactive exhibits.",
      coverImage: tourDay1Image || fallbackImage,
      content: `
        <p>Our first day of the educational tour was filled with excitement as we visited the Science Museum. The day started early with all students gathering at the school campus at 7:00 AM. After a brief orientation about the tour schedule and safety guidelines, we boarded the bus at 7:30 AM.</p>
        
        <p>We arrived at the Science Museum at around 9:00 AM. The museum guide welcomed us and gave us an overview of the different exhibits we would be exploring throughout the day.</p>
        
        <p>The first exhibit we visited was the 'Space Exploration' gallery. We learned about the solar system, space missions, and even got to see a real meteorite! The interactive displays allowed us to experience what it feels like to be in zero gravity.</p>
        
        <p>After lunch, we participated in a hands-on workshop about renewable energy. We built small solar-powered cars and raced them in the museum's courtyard. It was not only fun but also educational as we learned about sustainable energy sources.</p>
        
        <p>The day concluded with a visit to the 'Human Body' exhibit where we learned about anatomy and physiology through interactive displays. We left the museum at 4:00 PM and returned to school by 5:30 PM.</p>
        
        <p>Overall, it was an enriching first day that set the tone for the rest of our educational tour. We're looking forward to what Day 2 has in store for us!</p>
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
      readTime: "4 min read",
      excerpt:
        "On our second day, we explored the Historical Museum and learned about the rich cultural heritage of the region.",
      coverImage: tourDay2Image || fallbackImage,
      content: `
        <p>On our second day, we explored the Historical Museum and learned about the rich cultural heritage of the region. We arrived at the museum at 9:30 AM after a short bus ride from school.</p>
        
        <p>The museum curator gave us a detailed tour of the ancient artifacts section. We saw pottery, tools, and jewelry dating back thousands of years. It was fascinating to see how people lived in ancient times.</p>
        
        <p>One of the highlights was the medieval weapons collection. We learned about different types of swords, shields, and armor used during various historical periods.</p>
        
        <p>After lunch, we participated in an archaeological workshop where we learned how archaeologists excavate and preserve historical artifacts. We even got to try our hand at a simulated dig site!</p>
        
        <p>The day ended with a visit to the cultural heritage section, which showcased traditional costumes, musical instruments, and art from different periods. We left the museum at 4:30 PM with a deeper appreciation for our history and cultural heritage.</p>
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
      tags: ["History", "Museum", "Archaeology", "Cultural Heritage"],
    },
    {
      id: 3,
      title: "Educational Tour - Day 3",
      date: "April 9, 2025",
      readTime: "6 min read",
      excerpt:
        "The third day was dedicated to science and technology, with visits to a research center and technology park.",
      coverImage: tourDay3Image || fallbackImage,
      content: `
        <p>The third day was dedicated to science and technology, with visits to a research center and technology park. We started at the research center where scientists showed us their current projects in renewable energy and environmental conservation.</p>
        
        <p>We participated in a hands-on experiment about water purification, learning how contaminated water can be cleaned through various filtration methods. The researchers explained how their work helps communities access clean drinking water.</p>
        
        <p>In the afternoon, we toured a technology park where several tech companies have their offices. We learned about software development, artificial intelligence, and how technology is shaping our future. A highlight was trying virtual reality headsets that transported us to different environments.</p>
        
        <p>The day ended with a panel discussion where professionals in STEM fields shared their career journeys and answered our questions. It was inspiring to see the real-world applications of what we learn in our science and math classes!</p>
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
      tags: ["Technology", "Research", "STEM", "Virtual Reality"],
    },
    {
      id: 4,
      title: "Educational Tour - Day 4",
      date: "April 10, 2025",
      readTime: "5 min read",
      excerpt: "Our fourth day focused on arts and culture, beginning with a visit to the National Art Gallery.",
      coverImage: tourDay4Image || fallbackImage,
      content: `
        <p>Our fourth day focused on arts and culture, beginning with a visit to the National Art Gallery. We explored different art movements through the centuries and learned about various techniques used by famous artists.</p>
        
        <p>An artist-in-residence gave us a demonstration of oil painting, explaining the process from sketch to finished artwork. We even got to try our hand at a simple painting technique, creating our own small masterpieces to take home.</p>
        
        <p>After lunch, we attended a cultural performance that showcased traditional music and dance. The performers explained the significance of each piece and how they reflect our cultural heritage. Some of us were invited on stage to learn a few dance steps!</p>
        
        <p>The day concluded with a visit to a craft village where artisans continue to practice traditional crafts. We watched demonstrations of pottery, weaving, and woodcarving, gaining appreciation for the skill and patience required for these art forms.</p>
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
      tags: ["Art", "Culture", "Performance", "Crafts"],
    },
    {
      id: 5,
      title: "Educational Tour - Day 5",
      date: "April 11, 2025",
      readTime: "7 min read",
      excerpt:
        "Our final day of the educational tour was spent at the Botanical Gardens, where we learned about biodiversity.",
      coverImage: tourDay5Image || fallbackImage,
      content: `
        <p>Our final day of the educational tour was spent at the Botanical Gardens, where we learned about biodiversity and environmental conservation. The gardens were a beautiful setting for our last day, with thousands of plant species from around the world.</p>
        
        <p>We started with a guided tour of the tropical rainforest section, where we learned about the importance of rainforests in maintaining the Earth's ecosystem. The guide explained how rainforests provide habitat for countless species and help regulate the global climate.</p>
        
        <p>Next, we visited the desert plants section, which was a stark contrast to the lush rainforest. We learned about the amazing adaptations that allow plants to survive in extreme conditions with very little water.</p>
        
        <p>After lunch, we participated in a seed planting workshop where each student got to plant a native tree seedling that would later be transplanted as part of a reforestation project. It felt good to know that our small action would have a lasting positive impact on the environment.</p>
        
        <p>The tour concluded with a reflection session where we discussed what we had learned throughout the week and how we could apply this knowledge in our daily lives. It was a perfect end to an educational and inspiring week!</p>
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
      tags: ["Botany", "Environment", "Conservation", "Biodiversity"],
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
                      <Clock size={14} />
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
                      <MessageSquare size={18} />
                      <span>Read Article</span>
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
