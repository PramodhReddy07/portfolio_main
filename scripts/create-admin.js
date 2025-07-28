const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    // Create admin user
    const admin = await prisma.user.upsert({
      where: {
        email: 'admin@pramodh.dev'
      },
      update: {},
      create: {
        name: 'Pramodh Reddy',
        email: 'admin@pramodh.dev',
        hashedPassword: hashedPassword,
      }
    });
    
    console.log('✅ Admin user created successfully!');
    console.log('📧 Email: admin@pramodh.dev');
    console.log('🔑 Password: admin123');
    console.log('👤 Name:', admin.name);
    
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin(); 