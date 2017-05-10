/**
 * Created by TeK7_Sys30 on 09-05-2017.
 */
export class ServersService {

    private servers = [
        {
            id: 1,
            name: 'Productionserver',
            status: 'online'
        },
        {
            id: 2,
            name: 'Testserver',
            status: 'offline'
        },
        {
            id: 3,
            name: 'Devserver',
            status: 'offline'
        }
    ];
    getServers() {
        return this.servers;
    }

    getServer(id: number) {
        let server;
        this.servers.forEach(
            (s) => {
                console.log(id);
                console.log(s.id);
                if (s.id == id) {
                    server = s;
                }
            });
        return server;
    }

    updateServer(id: number, serverInfo: {name: string, status: string}) {
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );
        if (server) {
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    }
}