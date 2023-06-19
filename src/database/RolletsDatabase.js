import A from '../resources/rollersImages/A.jpg';
import B from '../resources/rollersImages/B.jpg';




const RolletsDatabase = {
  forTAP39: [
    // SMALL WINDOW ROLLETS
    {
      id: 'swr101',
      name: '',
      article: '',
      description: '',
      price: ,
      category: 'On box',
      imageA: A,
      imageB: B
    },
    {
      id: 'swr102',
      name: '',
      article: '',
      description: '',
      price: ,
      category: 'On box',
      imageA: A,
      imageB: B
    },
    // Other forTAP39 products...
  ],
  forTAP55: [
    // MEDIUM WINDOW ROLLETS
    {
      id: 'mwr101',
      name: '',
      article: '',
      description: '',
      price: ,
      category: 'On box',
      imageA: A,
      imageB: B
    },
    {
      id: 'mwr102',
      name: '',
      article: '',
      description: '',
      price: ,
      category: 'On box',
      imageA: A,
      imageB: B
    },
    // Other forTAP55 products...
  ],
  // Common products suitable for both groups
  common: [
    {
      id: 'crd101',
      name: '',
      article: '',
      description: '',
      price: ,
      category: 'On box',
      imageA: A,
      imageB: B
    },
    {
      id: 'crd102',
      name: '',
      article: '',
      description: '',
      price: ,
      category: 'On box',
      imageA: A,
      imageB: B
    },
    // Other common products...
  ],

  getProductById: function (productId) {
    // Search for the product in all arrays
    const product = this.industrial.find(product => product.id === productId) ||
                    this.residential.find(product => product.id === productId) ||
                    this.common.find(product => product.id === productId);

    return product;
  }
  
};

export default RolletsDatabase;
