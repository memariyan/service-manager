async function deploy() {
    const ServiceManager = await ethers.getContractFactory('ServiceManager');
    const serviceManager = await ServiceManager.deploy();

    console.log("service manager address : ", serviceManager.address);
}

deploy()
    .then( () => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });