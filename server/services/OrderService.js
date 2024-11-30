const courierCharges = [
  { maxWeight: 200, charge: 5 },
  { maxWeight: 500, charge: 10 },
  { maxWeight: 1000, charge: 15 },
  { maxWeight: 5000, charge: 20 },
];

// Function to calculate courier cost based on package weight
function calculateCourierCost(weight) {
  for (const range of courierCharges) {
    if (weight <= range.maxWeight) {
      return range.charge;
    }
  }
  return 0; // Default fallback
}

// Function to divide items into packages based on rules
function divideIntoPackages(items) {
  const packages = [];
  let currentPackage = { items: [], totalWeight: 0, totalPrice: 0 };

  // Sort items by price descending for better grouping
  items.sort((a, b) => b.price - a.price);

  for (const item of items) {
    if (
      currentPackage.totalPrice + item.price <= 250 &&
      currentPackage.totalWeight + item.weight <= 5000
    ) {
      currentPackage.items.push(item);
      currentPackage.totalPrice += item.price;
      currentPackage.totalWeight += item.weight;
    } else {
      // Add the current package to the list and start a new one
      packages.push(currentPackage);
      currentPackage = {
        items: [item],
        totalWeight: item.weight,
        totalPrice: item.price,
      };
    }
  }

  // Add the last package if it has items
  if (currentPackage.items.length > 0) {
    packages.push(currentPackage);
  }

  // Add courier costs to each package
  return packages.map((pkg) => ({
    ...pkg,
    courierCost: calculateCourierCost(pkg.totalWeight),
  }));
}

module.exports = { divideIntoPackages };
