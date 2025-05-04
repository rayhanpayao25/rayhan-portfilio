"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, Share2, Bookmark, ThumbsUp } from 'lucide-react'
import "../../components/Bloghome/Bloghome.css"

// Import images from assets folder
import tourDay1Image from "../../assets/tourDay1Image.jpg"
import tourDay2Image from "../../assets/gallery4Day2.jpg"
import tourDay3Image from "../../assets/naturalmuseum.jpg"
import tourDay4Image from "../../assets/hytec.jpg"
import tourDay5Image from "../../assets/lrt.jpg"

// Import gallery images
import gallery1Day1 from "../../assets/gallery1Day1.jpg"
import gallery2Day1 from "../../assets/gallery1Day2.jpg"
import gallery3Day1 from "../../assets/gallery1Day3.jpg"
import gallery4Day1 from "../../assets/gallery1Day4.jpg"
import gallery5Day1 from "../../assets/gallery1Day5.jpg"

import gallery1Day2 from "../../assets/gallery1Day2s.jpg"
import gallery2Day2 from "../../assets/gallery2Day2.jpg"
import gallery3Day2 from "../../assets/gallery3Day2.jpg"
import gallery4Day2 from "../../assets/gallery4Day2.jpg"
import gallery6Day2 from "../../assets/gallery6Day2.jpg"


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

const blogPosts = [
  {
    id: 1,
    title: "Educational Tour - Day 1",
    date: "April 7, 2025",
    excerpt: "Our first day of the educational tour in Fort Santiago, Metro Manila",
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
        caption: "Students  boarding the bus for our first day of educational tour",
      },
      {
        src: gallery2Day1 || fallbackImage,
        alt: "Old Cannons and Cannonballs",
        caption: "Old Cannons and Cannonballs – A historical display of old cannons and cannonballs, showcasing remnants of the Philippines' colonial and wartime history.",
      },
      {
        src: gallery3Day1 || fallbackImage,
        alt: "Fort Santiago – Rizal's Prison Cell",
        caption: "Fort Santiago – Rizal's Prison Cell – The prison cell inside Fort Santiago where Dr. José Rizal was held before his execution in 1896, now preserved as a national heritage site.",
      },
      {
        src: gallery4Day1 || fallbackImage,
        alt: "Rizal Monument in Luneta",
        caption: "Rizal Monument in Luneta – The iconic monument dedicated to Dr. José Rizal, located in Luneta Park, Manila, visited by many to honor his legacy.",
      },
      {
        src: gallery5Day1 || fallbackImage,
        alt: "Execution Site Marker",
        caption: "Execution Site Marker – The exact site in Luneta where José Rizal was executed, marked with a sculpture and plaques to commemorate his sacrifice for Philippine independence.",
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
        alt: "Historical Mural in Subic Freeport Zone",
        caption: "Historical Mural in Subic Freeport Zone – A colorful mural depicting important Filipino historical figures and events, found in a cultural or heritage site within the Subic Freeport Zone.",
      },
      {
        src: gallery2Day2 || fallbackImage,
        alt: "Intramuros Scale Model in Subic",
        caption: "Intramuros Scale Model in Subic – A detailed scale model of Intramuros, displayed as part of an educational exhibit in the Subic Freeport Zone.",
      },
    

      {
        src: gallery3Day2 || fallbackImage,
        alt: "Communications Tower",
        caption: "Communications Tower – A tall steel communications tower, possibly used for naval or emergency communication within the zone.",
      },

      {
        src: gallery4Day2 || fallbackImage,
        alt: "Overlooking Subic Bay",
        caption: "Overlooking Subic Bay – A scenic view showing the coastline, mountains, and urban development of the Subic Freeport Zone.",
      },
      
      {
        src: gallery6Day2 || fallbackImage,
        alt: "Briefing Room in Subic Freeport Zone ",
        caption: "Briefing Room  – A command or operations room used for training, simulations, or emergency management within the zone.",
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
    id: 7,
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
]

export default function BlogPost() {
  const [post, setPost] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [likedPosts, setLikedPosts] = useState([])
  const [savedPosts, setSavedPosts] = useState([])

  useEffect(() => {
    // Get the post ID from the URL
    const pathSegments = window.location.pathname.split("/")
    const id = Number.parseInt(pathSegments[pathSegments.length - 1])

    if (id) {
      const foundPost = blogPosts.find((post) => post.id === id)

      if (foundPost) {
        setPost(foundPost)
      } else {
        // Redirect to home if post not found
        window.location.href = "/"
      }

      setIsLoading(false)
    }
  }, [])

  const nextImage = () => {
    if (post) {
      setActiveImageIndex((prev) => (prev === post.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (post) {
      setActiveImageIndex((prev) => (prev === 0 ? post.images.length - 1 : prev - 1))
    }
  }


  const toggleSave = (postId, e) => {
    e.stopPropagation()
    setSavedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const handleBackClick = () => {
    window.location.href = "/#blog"
  }

  if (isLoading) {
    return (
      <div className="blog-container">
        <div className="blog-loading">
          <div className="loader"></div>
          <p>Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="blog-container">
        <div className="no-results">
          <h3>Post not found</h3>
          <a href="/" className="primary-button">
            Return to Home
          </a>
        </div>
      </div>
    )
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
         
        </header>
      </div>

      <section className="blog-section">
        <div className="blog-container">
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
              {post.title}
            </motion.h1>

          

            <div className="blog-post-featured-image">
              <img src={post.coverImage || "/placeholder.svg"} alt={post.title} />
            </div>

            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

            <div className="blog-post-tags">
              {post.tags.map((tag, i) => (
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
                        src={post.images[activeImageIndex].src || "/placeholder.svg"}
                        alt={post.images[activeImageIndex].alt}
                      />
                      <p className="image-caption">{post.images[activeImageIndex].caption}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <button className="gallery-nav next" onClick={nextImage}>
                  <ArrowRight size={24} />
                </button>
              </div>
              <div className="gallery-thumbnails">
                {post.images.map((image, index) => (
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
              {post.id > 1 && (
                <a href={`/blog/${post.id - 1}`} className="prev-post">
                  <ArrowLeft size={20} />
                  <span>Previous Post</span>
                </a>
              )}

              {post.id < blogPosts.length && (
                <a href={`/blog/${post.id + 1}`} className="next-post">
                  <span>Next Post</span>
                  <ArrowRight size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
