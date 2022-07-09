import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Banner from '../../components/Banner.js';
import Card from '../../components/Card.js';
import styles from '../../styles/Team.module.scss';
import data from '../../execteam.js';

const team = () => {
  return (
    <div>
    <Banner>
    </Banner>
    
    <div className={styles.grid_wrap}>
      <h2 className={styles.team}>President</h2>
      <div className={styles.pres_grid}>
        {data.pres.map((exec, index) =>
          <Card
            key={index}
            name={exec.name}
            profile={exec.profile}
            position={exec.position}
          >
          </Card>) }
      </div>
      <h2 className={styles.team}>Finance Team</h2>
      <div className={styles.fin_grid}>
          {data.finance.map((exec, index) =>
              <Card
                key={index}
                name={exec.name}
                profile={exec.profile}
                position={exec.position}
              >
              </Card>) }
      </div>
      <h2 className={styles.team}>Development Team</h2>
      <div className={styles.dev_grid}>
        {data.dev.map((exec, index) =>
            <Card
              key={index}
              name={exec.name}
              profile={exec.profile}
              position={exec.position}
            >
            </Card>) }
      </div>
      <h2 className={styles.team}>Education Team</h2>
      <div className={styles.edu_grid}>
          {data.edu.map((exec, index) =>
              <Card
                key={index}
                name={exec.name}
                profile={exec.profile}
                position={exec.position}
              >
              </Card>) }
      </div>
      <h2 className={styles.team}>Social Media and Design Team</h2>
      <div className={styles.sd_grid}>
          {data.socialdesign.map((exec, index) =>
              <Card
                key={index}
                name={exec.name}
                profile={exec.profile}
                position={exec.position}
              >
              </Card>) }
      </div>
      <h2 className={styles.team}>Events Team</h2>
      <div className={styles.ev_grid}>
          {data.events.map((exec, index) =>
              <Card
                key={index}
                name={exec.name}
                profile={exec.profile}
                position={exec.position}
              >
              </Card>) }
      </div>
      <h2 className={styles.team}>External Affairs Team</h2>
      <div className={styles.ext_grid}>
          {data.external.map((exec, index) =>
              <Card
                key={index}
                name={exec.name}
                profile={exec.profile}
                position={exec.position}
              >
              </Card>) }
      </div>
    </div>
    </div>
  )
}

export default team