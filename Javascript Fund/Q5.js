function calculateDeliveryTime(packageType) {
    let deliveryTime;
  
    switch (packageType.toLowerCase()) {
      case "standard":
        deliveryTime = "3-5 days";
        break;
      case "express":
        deliveryTime = "1-2 days";
        break;
      case "overnight":
        deliveryTime = "Delivered the next day";
        break;
      default:
        deliveryTime = "Invalid package type";
    }
  
    console.log(`Package Type: ${packageType}, Estimated Delivery Time: ${deliveryTime}`);
  }
  
  // Testing the function
  calculateDeliveryTime("standard");
  calculateDeliveryTime("express");
  calculateDeliveryTime("overnight");
  calculateDeliveryTime("unknown");
  