import React from "react";
import ImageLoader from "../components/ImageLoader";
import PropTypes from 'prop-types'

export default {
  title: "Components/Example Usage",
  component: ImageLoader,
  argTypes : {
    src : {
      description: 'Actual image source to render',
      defaultValue : "/images/mac-lg.jpg",
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "/images/mac-lg.jpg" },
      },
      control : {
        type : 'text'
      },
    },
    placeHolderSrc : {
      description: 'Low quality image source to show before actual image render',
      defaultValue : "/images/mac-sm.jpg",
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "/images/mac-sm.jpg" },
      },
      control : {
        type : 'text'
      },
    },
    errorSrc : {
      description: 'Low quality image source to show when actual image get error',
      defaultValue : "/images/mac-sm-fallback.jpg",
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "/images/mac-sm-fallback.jpg" },
      },
      control : {
        type : 'text'
      },
    },
    lazyload : {
      description: 'Include lazyload feature or not',
      defaultValue : false,
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control : {
        type : 'boolean'
      },
    },
    threshold : {
      description: 'Define the position of image to load from the center of screen',
      defaultValue : 100,
      type: { name: 'number', required: false },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
      control : {
        type : 'number'
      },
    },
    alt : {
      description: 'Some proper text for image',
      defaultValue : "",
      type: { name: 'text', required: false },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: "" },
      },
      control : {
        type : 'text'
      },
    },   
  }
};

export const ImageLoaderExample = ({src, placeHolderSrc, alt,errorSrc,threshold,lazyload}) => {
  return (
      <ImageLoader style={{width : '200px'}} src={src} placeHolderSrc={placeHolderSrc} lazyload={lazyload} errorSrc={errorSrc} alt={alt} threshold={threshold} />
  )
}

ImageLoaderExample.prototype = {
  src : PropTypes.string,
  placeHolderSrc : PropTypes.string,
  errorSrc : PropTypes.string,
  alt : PropTypes.string,
  threshold : PropTypes.number,
  lazyload : PropTypes.bool,
}

ImageLoaderExample.defaultProps = {
  src : '/images/mac-lg.jpg',
  placeHolderSrc :'/images/mac-sm.jpg',
  errorSrc : '/images/mac-sm-fallback.jpg',
  alt : '',
  threshold : 100,
  lazyload :false,
}