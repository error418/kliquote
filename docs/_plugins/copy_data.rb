module RunNodeBefore
    require 'fileutils'
    def self.process(site, payload)
      return if @processed
      FileUtils.cp_r("../quotes", "./_data")
      @processed = true
    end
  end
  
  Jekyll::Hooks.register :site, :pre_render do |site, payload|
    RunNodeBefore.process(site, payload)
  end