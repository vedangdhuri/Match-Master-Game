import React from 'react'

export const Footer = () => {
  return (
    <footer className="items-center justify-between w-full">
      {/* Copyright */}
      <div className="flex justify-center w-full">
        <p className="text-sm text-muted-foreground">
          {" "}
          &copy; {new Date().getFullYear()} Vedang Dhuri. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
