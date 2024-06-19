module.exports = {
    development: {
      dialect: "postgres",
      protocol: "postgres",
      host: "dpg-cppetgmehbks73c1ai7g-a.frankfurt-postgres.render.com",
      username: "slamsphere_db_user",
      password: "BG3Wew9CbGsucYqBgfCoYEYVsJlPSybj",
      database: "slamsphere_db",
      dialectOptions: {
        ssl: true,
        native: true,
      },
      define: {
        timestamps: false,
      },
    },
  };