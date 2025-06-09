import {MapPin, Wallet,Car} from "lucide-react";
export default function Info(){
    return (
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-info">
                  <MapPin width={64} height={64} />
                  <h2>Availability</h2>
                  <p>
                      Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
                  </p>
              </div>
              <div className="card-info">
                  <Car width={64} height={64}/>
                  <h2>Comfort</h2>
                  <p>
                      Gravida auctor fermentum morbi vulputate
                      ac egestas orcietium convallis
                  </p>
              </div>
              <div className="card-info">
                  <Wallet  width={64} height={64}/>
                  <h2>Savings</h2>
                  <p>
                      Pretium convallis id diam sed commodo vestibulum lobortis volutpat
                  </p>
              </div>
          </div>
        </section>
    )
}