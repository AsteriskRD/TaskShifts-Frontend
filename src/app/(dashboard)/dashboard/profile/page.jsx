import AboutProfile from "../../../components/dashboard/afterKyc/AbouttProfile";
import ProfileCard from "../../../components/dashboard/afterKyc/ProfileCard";
import AvailabilityProfile from "../../../components/dashboard/afterKyc/AvailabilityProfile";
import ServiceOffer from "../../../components/dashboard/afterKyc/ServiceOffer";

export default function MyProfile(){
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">My Profile</h1>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Manage your profile information and settings</p>
            </div>
            
            {/* Profile Card */}
            <ProfileCard/>
            
            {/* About & Availability Section */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
    <AboutProfile className="flex-1" />
    <AvailabilityProfile />
</div>
            
            {/* Service Offer */}
            <ServiceOffer/>
        </div>
    )
}