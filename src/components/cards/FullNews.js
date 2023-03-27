import React from 'react'
import {
  FaComment,
  FaEye,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Comments from '../Comments/Comments'
import Newsletter from '../Newsletter/Newsletter'
import PopularPosts from '../PopularPosts/PopularPosts'

const FullNews = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 md:container p-5 gap-5'>
      <div className='shadow-xl border gap-6 text-sm lg:col-span-2 border'>
        <div>
          <img
            src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/blog34.jpg'
            className='w-full'
          />
          <div className='p-4'>
            <div className='flex justify-between p-2 gap-3 items-center text-xs'>
              <div className='flex gap-2 items-center'>
                <div className='avatar'>
                  <div className='w-10 rounded-full'>
                    <img src='http://1.gravatar.com/avatar/1ec59eae354306975b17d78e8473d78b?s=90&d=mm&r=g' />
                  </div>
                </div>
                <h4>Admin</h4>
              </div>
              <div className='flex gap-x-4 text-sm'>
                <div className='flex gap-2 items-center'>
                  <p>
                    <FaEye />
                  </p>
                  <p>1084</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <p>
                    <FaComment />
                  </p>
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className='divider mt-0'></div>
            <h3 className='text-sm font-bold'>DECEMBER 5, 2016</h3>
            <article className='text-sm'>
              Universities and states including, are taking a part in a campaign
              to pressure the Sudanese govt. to stop the killing. And right here
              in the UCC, we’re hearing from God about what it means to be a
              welcoming church that holds on to our Christian witness. Because
              in the faces of those young veterans who come back from Iraq and
              Afghanistan, I see my grandfather, who signed up after Pearl
              Harbor, marched in Patton’s Army, and was rewarded by a grateful
              nation with the chance to go to college on the GI Bill. I realize
              that I am not the likeliest candidate for this office. The
              enduring faith of over a billion people is so much bigger than the
              narrow hatred of a few. Universities and states including, are
              taking a part in a campaign to pressure the Sudanese govt. to stop
              the killing. And right here in the UCC, we’re hearing from God
              about what it means to be a <br />
              <br />
              welcoming church that holds on to our Christian witness. Because
              in the faces of those young veterans who come back from Iraq and
              Afghanistan, I see my grandfather, who signed up after Pearl
              Harbor, marched in Patton’s Army, and was rewarded by a grateful
              nation with the chance to go to college on the GI Bill. I realize
              that I am not the likeliest candidate for this office. The
              enduring faith of over a billion people is so much bigger than the
              narrow hatred of a few. Universities and states including, are
              taking a part in a campaign to pressure the Sudanese govt. to stop
              the killing. And right here in the UCC, we’re hearing from God
              about what it means to be a welcoming church that holds on to our
              Christian witness. Because in the faces of those young veterans
              who come back from Iraq and <br />
              Afghanistan, I see my grandfather, who signed up after Pearl
              Harbor, marched in Patton’s Army, and was rewarded by a grateful
              nation with the chance to go to college on the GI Bill. I realize
              that I am not the likeliest candidate for this office. The
              enduring faith of over a billion people is so much bigger than the
              narrow hatred of a few. Universities and states including, are
              taking a part in a campaign to pressure the Sudanese govt. to stop
              the killing. And right here in the UCC, we’re hearing from God
              about what it means to be a welcoming church that holds on to our
              Christian witness. Because in the faces of those young veterans
              who come back from Iraq and Afghanistan, I see my grandfather, who
              signed up after Pearl Harbor, marched in Patton’s Army, and was
              rewarded by a grateful nation with
              <br />
              <br />
              the chance to go to college on the GI Bill. I realize that I am
              not the likeliest candidate for this office. The enduring faith of
              over a billion people is so much bigger than the narrow hatred of
              a few. Universities and states including, are taking a part in a
              campaign to pressure the Sudanese govt. to stop the killing. And
              right here in the UCC, we’re hearing from God about what it means
              to be a welcoming church that holds on to our Christian witness.
              Because in the faces of those young veterans who come back from
              Iraq and Afghanistan, I see my grandfather, who signed up after
              Pearl Harbor, marched in Patton’s Army, and was rewarded by a
              grateful nation with the chance to go to college on the GI Bill. I
              realize that I am not the likeliest candidate for this office. The
              enduring faith of over a billion people is so much bigger than the
              narrow hatred of a few.
              <br /> <br />
              Universities and states including, are taking a part in a campaign
              to pressure the Sudanese govt. to stop the killing. And right here
              in the UCC, we’re hearing from God about what it means to be a
              welcoming church that holds on to our Christian witness. Because
              in the faces of those young veterans who come back from Iraq and
              Afghanistan, I see my grandfather, who signed up after Pearl
              Harbor, marched in Patton’s Army, and was rewarded by a grateful
              nation with the chance to go to college on the GI Bill. I realize
              that I am not the likeliest candidate for this office. The
              enduring faith of over a billion people is so much bigger than the
              narrow hatred of a few.
            </article>
            <div className='divider'></div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-wrap gap-2'>
                <Link to='/' className='btn btn-outline'>
                  News
                </Link>
                <Link to='/' className='btn btn-outline'>
                  Soccer
                </Link>
                <Link to='/' className='btn btn-outline'>
                  Ultimaet kickoff
                </Link>
                <Link to='/' className='btn btn-outline'>
                  World
                </Link>
              </div>
              <ul className='flex flex-wrap gap-3'>
                <li>
                  <a href='/'>
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='py-4 flex flex-col'>
          <h2 className='text-xl px-8 py-2'>
            <span className='bg-cyan-700 py-4 pl-2 pr-12 text-white'>
              Leave a comment
            </span>
          </h2>
          <from className='p-8'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-lg w-full max-w-lg'
            />
            <p>
              <button type='submit' className='btn my-2'>
                Post Comment
              </button>
            </p>
          </from>
          <div className='flex flex-col gap-4 px-8'>
            <Comments />
            <Comments />
            <Comments />
          </div>
        </div>
      </div>
      {/* Sidebar  */}
      <div className='flex flex-col gap-8'>
        <Newsletter />
      </div>
    </section>
  )
}

export default FullNews
