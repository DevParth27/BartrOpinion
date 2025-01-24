// import { useState } from 'react';
// import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex items-center space-x-2 mb-6">
//           <MessageSquare className="w-6 h-6 text-blue-600" />
//           <h2 className="text-xl font-semibold">Get in Touch</h2>
//         </div>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="space-y-6">
//           <h3 className="text-lg font-medium">Contact Information</h3>
          
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <Mail className="w-5 h-5 text-blue-600" />
//               <div>
//                 <p className="text-sm text-gray-500">Email</p>
//                 <p className="font-medium">support@bartrOpinion.com</p>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3">
//               <Phone className="w-5 h-5 text-blue-600" />
//               <div>
//                 <p className="text-sm text-gray-500">Phone</p>
//                 <p className="font-medium">+91 9511827732</p>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3">
//               <MapPin className="w-5 h-5 text-blue-600" />
//               <div>
//                 <p className="text-sm text-gray-500">Address</p>
//                 <p className="font-medium">Trimurtee Nagar</p>
//                 <p className="text-gray-500">Nagpur, Maharashtra 440046</p>
//               </div>
//             </div>
//           </div>

//           <div className="border-t pt-6">
//             <h4 className="font-medium mb-2">Office Hours</h4>
//             <div className="space-y-2 text-gray-600">
//               <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
//               <p>Saturday: 10:00 AM - 4:00 PM</p>
//               <p>Sunday: Closed</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from 'react';
// import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto px-4">
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex items-center space-x-2 mb-6">
//           <MessageSquare className="w-6 h-6 text-blue-600" />
//           <h2 className="text-xl font-semibold">Get in Touch</h2>
//         </div>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="space-y-6">
//           <h3 className="text-lg font-medium">Contact Information</h3>
          
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <Mail className="w-5 h-5 text-blue-600" />
//               <div>
//                 <p className="text-sm text-gray-500">Email</p>
//                 <p className="font-medium">support@bartrOpinion.com</p>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3">
//               <Phone className="w-5 h-5 text-blue-600" />
//               <div>
//                 <p className="text-sm text-gray-500">Phone</p>
//                 <p className="font-medium">+91 9511827732</p>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3">
//               <MapPin className="w-5 h-5 text-blue-600" />
//               <div>
//                 <p className="text-sm text-gray-500">Address</p>
//                 <p className="font-medium">Trimurtee Nagar</p>
//                 <p className="text-gray-500">Nagpur, Maharashtra 440046</p>
//               </div>
//             </div>
//           </div>

//           <div className="border-t pt-6">
//             <h4 className="font-medium mb-2">Office Hours</h4>
//             <div className="space-y-2 text-gray-600">
//               <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
//               <p>Saturday: 10:00 AM - 4:00 PM</p>
//               <p>Sunday: Closed</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react"
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-2 mb-6">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Get in Touch</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">support@bartrOpinion.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+91 9511827732</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">Trimurtee Nagar</p>
                  <p className="text-gray-500">Nagpur, Maharashtra 440046</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-medium mb-2">Office Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

